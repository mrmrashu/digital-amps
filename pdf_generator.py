import io
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib import colors
from PyPDF2 import PdfFileReader, PdfFileWriter
from reportlab.lib.units import inch
import random
import string

'''
    data_dict = {
        "text":["x_co","y_co","width","height","font_size","font_weight","rotation","color"]
    }

'''

def editPDF(data_dict):
    packet = io.BytesIO()
    can = canvas.Canvas(packet, pagesize=A4)
    for key, value in data_dict.items():
        can.saveState()
        can.rotate( value[-2] )
        table= Table([[key]], colWidths = value[2]*inch)
        c = colors.black
        if(value[-1]=="white"):
            c = colors.white
        table.setStyle(
            TableStyle(
                [
                    ("ALIGN", (0,0,), (-1,-1), "CENTER"),
                    ("FONTSIZE", (0,0), (-1,-1), value[-4]),
                    ("TEXTCOLOR", (0,0,), (-1,-1), c),
                    ("TEXTFONT", (0,0), (-1,-1), value[-3]),
                ]
            )
        )
        table.wrapOn(can,value[2]*inch,value[3]*inch)
        table.drawOn(can,value[0],value[1])
        can.restoreState()
    can.save()
    packet.seek(0)
    content_pdf = PdfFileReader(packet)
    output_pdf = PdfFileWriter()
    reader = PdfFileReader("./static/pdf/stratahedron.pdf","rb")
    page = reader.getPage(0)
    page.mergePage(content_pdf.getPage(0))
    output_pdf.addPage(page)
    letters = string.digits
    file_name_random = ''.join(random.choice(letters) for i in range(5))
    file_name = f"./static/pdf/digital_stratahedron_{file_name_random}.pdf"
    outputStream = open(file_name, "wb")
    output_pdf.write(outputStream)
    outputStream.close()
    return file_name

# editPDF(
#     {
#         "Audience":[360,376,2,10,20,"Times-Bold",0,'black'],
#         "Be Understood":[326,315,3,10,13,"Times-Regular",0,'black'],
#         "Be Seen":[440,-120,3,10,13,"Times-Regular",60,'black'],
#         "Be Heard":[-220,633,3,10,13,"Times-Regular",300,'black'],
#         "Method":[-507,-220,2,10,20,"Times-Bold",180,'black'],
#         "Digital Keystone":[-540,-303,3,10,13,"Times-Regular",180,'black'],
#         "Digital Assets":[-130,-430,3,10,13,"Times-Regular",120,'black'],
#         "Digital Ecosystem":[-520,324,3,10,13,"Times-Regular",240,'black'],
#         "#Topic1":[80,-442,1.2,5,10,"Times-Bold",90,'white'],
#         "#Topic3":[-193,-423,1.1,5,10,"Times-Bold",150,'white'],
#         "#Topic2":[-636,10,1.1,5,10,"Times-Bold",210,'white'],
#         "Story":[503,153,2,10,20,"Times-Bold",0,'black'],
#         "Resourceful":[455,78,3,10,13,"Times-Regular",0,'black'],
#         "Adaptable":[302,-360,3,10,13,"Times-Regular",60,'black'],
#         "Connected":[50,633,3,10,13,"Times-Regular",300,'black'],
#         "Process":[220,153,2,10,20,"Times-Bold",0,'black'],
#         "Digital Delivery":[195,78,3,10,13,"Times-Regular",0,'black'],
#         "Value Creation":[178,-120,3,10,13,"Times-Regular",60,'black'],
#         "Digital Experience":[-94,393,3,10,13,"Times-Regular",300,'black'],
#     }
# )







