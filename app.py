from flask import Flask, render_template, request, json, send_from_directory
from flask_wtf.csrf import CSRFProtect
from flask_mail import Message, Mail
from pdf_generator import editPDF
from pathlib import Path


app = Flask(__name__)

#app.config['SECRET_KEY'] = 'f9bf78b9a18ce6d46a0cd2b0b86df9da'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = "mrmrmangotree@gmail.com"
app.config['MAIL_PASSWORD'] = "baker street"
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True


csrf = CSRFProtect()
mail = Mail(app)


def emailTemp(request):
    return f"""
    
        <div
  style="
    display: block;
    float: left;
    box-sizing: border-box;
    width: 100%;
  "
>
  <div
    style="
      width: 100%;
      border: 1px solid #ad2c1a;
      border-radius: 8px;
      padding: 1%;
      display: block;
      float: left;
    "
  >
    <div style="width: 100%; display: block; float: left">
      <img
        src="https://demo-digiatl-amps.herokuapp.com/static/images/digital_amps_logo_black.png"
        alt=""
        width="55px"
        height="55px"
        style="display: block; float: left"
      />
      <div
        style="
          display: block;
          font-size: 18px;
          font-weight: bold;
          padding: 2%;
          margin-left: 40%;
        "
      >
        Digital A.M.P.S
      </div>
    </div>
    <br />
    <br>
    <p style="width:100%; display:block; float:left;font-size: 16px; font-weight: 650; padding-top: 2%;">
      Hi, {request.form["full_name"]}
    </p>
    <br />
    <p style="font-size: 16px; font-weight: 450">
      Thanks for creating your Digital Business Stratahedon<sup
        style="font-size: 12px"
        >TM</sup
      >
      Model. We’ve attached it to this email as a PDF that you can finish it
      with. This tool will literally shape how you build out your own digital
      strategy.
    </p>
    <br />
    <p style="font-size: 16px; font-weight: 450">
      Here are the details you submitted:
    </p>
    <p style="width: 100%; font-size: 16px; margin-left: 3%;
    ">
      <span style="font-weight: 600">Name:</span
      >&nbsp;{request.form["full_name"]}
    </p>
    <p style="width: 100%; font-size: 16px;margin-left: 3%;">
      <span style="font-weight: 600">Email:</span>&nbsp;{request.form["email"]}
    </p>
    <p style="width: 100%; font-size: 16px;margin-left: 3%;">
      <span style="font-weight: 600">Phone Number:</span
      >&nbsp;{request.form["contact_number"]}
    </p>
    <p style="width: 100%; font-size: 16px;margin-left: 3%;">
      <span style="font-weight: 600">Location:</span
      >&nbsp;{request.form["location"]}
    </p>
    <p style="width: 100%; font-size: 16px;margin-left: 3%;">
      <span style="font-weight: 600">Company Website:</span
      >&nbsp;{request.form["company_website"]}
    </p>
    <div
      style="
        width: 97%;
        border: 1px solid black;
        padding: 1%;
        display: block;
        float: left;
        border-radius: 8px;
        margin: 1%, 0;
      "
    >
      <p style="font-size: 16px; font-weight: bold">Next Step?</p>
      <p style="font-size: 16px; font-weight: 450">
        You can follow the instruction on the right side of the attached PDF
        when you print it, with your model, or watch the instruction video here:
        <a href="https://youtu.be/UrZS4o7jUBc">https://youtu.be/UrZS4o7jUBc</a>
      </p>
      <p style="font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700;">1. </span>Print your model out (the
        thicker the paper the better)
      </p>
      <p style="font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">2. </span>Cut your Stratahedron<sup
          style="font-size: 12px"
          >TM</sup
        >
        out of the PDF,
      </p>
      <p style="font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">3. </span>Fold it, and glue or sticky
        tape the edges to hold it together.
      </p>
      <p style="font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">4. </span>Print your model out (the
        thicker the paper the better)
      </p>
      <p style="font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">5. </span>Tada! Look in amazement at how
        your strategy starts to fit together, in something that you can hold in
        your hand and share with your team.
      </p>
      <br />
    </div>
    <br>
    <br>
    <p style="display: block; float:left; width:100%;font-size: 16px; font-weight: 450; margin-top:1%;">
        I’ll be showing you how to use it further and what to do next with it.
        In the meantime, here’s what you can do:
      </p>
      <p style="display: block; float:left;width:100%;font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">1. </span>Play with it and see how it all
        fits together. If you want to change it, go back to Stratahedron.digital
        <a href="www.stratahedron.digital"
          >www.stratahedron.digital</a
        >
        and create a new one.
      </p>
      <p style="display: block; float:left;width:100%;font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">2. </span>Join us in my Facebook Group
        <a href="https://bit.ly/digitalpathfinders"
          >bit.ly/digitalpathfinders </a
        >- The Digital Expedition League of Pathfinders, where we are helping to
        strengthen the digital journey for businesses around the world and
        create a new one.
      </p>
      <p style="display: block; float:left;width:100%;font-size: 16px; font-weight: 450;margin-left: 3%;">
        <span style="font-weight: 700">3. </span>Need extra help defining how to
        use it?
        <a href="https://calendly.com/doylebuehler/30min"
          >Book a Digital Pathfinder Session </a
        >with me and we can explore how you can use your foundation you created
        to grow a pipeline of high-value clients.
      </p>
    <br />
    <p
      style="
        width: 100%;
        display: block;
        float: left;
        font-size: 16px;
        font-weight: 450;
        padding-top: 2%;
      "
    >
      This literally is a one-of-a-kind tool that you designed, specifically for
      you.
      <br />
      Hope you enjoy it.
      <br />
      <br />
      Doyle Buehler
      <br />
      Dept.Digital
      <br />
      Senior Smarty Pants
      <br />
      +61 (0) 413 106 880
      <br />
      doyle@thedigitaldelusion.com
    </p>
  </div>
</div>
    """


coordinate_ls = [
    (360, 376, 2, 10, 20, "Sans-Bold", 0, 'black'),
    (326, 315, 3, 10, 13, "Sans-Regular", 0, 'black'),
    (440, -120, 3, 10, 13, "Sans-Regular", 60, 'black'),
    (-220, 633, 3, 10, 13, "Sans-Regular", 300, 'black'),
    (-507, -220, 2, 10, 20, "Sans-Bold", 180, 'black'),
    (-540, -303, 3, 10, 13, "Sans-Regular", 180, 'black'),
    (-130, -430, 3, 10, 13, "Sans-Regular", 120, 'black'),
    (-520, 324, 3, 10, 13, "Sans-Regular", 240, 'black'),
    (80, -442, 1.2, 5, 10, "Sans-Bold", 90, 'white'),
    (-193, -423, 1.1, 5, 10, "Sans-Bold", 150, 'white'),
    (-636, 10, 1.1, 5, 10, "Sans-Bold", 210, 'white'),
    (503, 153, 2, 10, 20, "Sans-Bold", 0, 'black'),
    (455, 78, 3, 10, 13, "Sans-Regular", 0, 'black'),
    (302, -360, 3, 10, 13, "Sans-Regular", 60, 'black'),
    (50, 633, 3, 10, 13, "Sans-Regular", 300, 'black'),
    (220, 153, 2, 10, 20, "Sans-Bold", 0, 'black'),
    (195, 78, 3, 10, 13, "Sans-Regular", 0, 'black'),
    (178, -120, 3, 10, 13, "Sans-Regular", 60, 'black'),
    (-94, 393, 3, 10, 13, "Sans-Regular", 300, 'black'),
]


@app.route('/')
def instruction():
    return render_template("instruction.html")


@app.route('/creator/studio/', methods=["POST", "GET"])
def creator_studio():
  try:
    if request.method == "POST":
        data_ls = []
        for data in dict(json.loads(request.form["element_data"]))["mainElementData"].values():
            data_ls.append(data)

        file_name = editPDF(dict(zip(data_ls, coordinate_ls)))
        msg = Message("The Digital Business Stratahedron Model That You Created Has Arrived",
                      sender='create@stratahedron.digital', recipients=[request.form["email"]], cc=['doyle@dept.digital'])
        msg.html = emailTemp(request)
        with app.open_resource(f"{file_name}") as fp:
            msg.attach(f"{Path(file_name).stem}.pdf",
                       'document/pdf', fp.read())
        mail.send(msg)
        return json.dumps({"status": "Ok", "link": f"{Path(file_name).stem}.pdf"})
    return render_template("creator_studio.html")
  except Exception as e:
    print(e)
    raise Exception(f"{e.__str__()}")
    # return json.dumps({"status": "NotOk", "error": f"{e.__str__()}"})


if __name__ == "__main__":
    app.run(debug=True, port=8000)
