/*
* Modifications to be made
* TODO:
*    -> Change word limits
*    -> Document the file/project with comments
*    ->
*
* */

// Load the text (questions) to be Rendered in the UI, when the document's ready
$(document).ready(function(){
    const elementData = {
        "Element 1 Questions: [A] Audience":{
                "How are you connecting & communicating with your Audience? What is the one core value that you deliver for your audience that no one else can?":
                    ["Name Your Element","Audience"],
                
                "Within your AUDIENCE framework, list the 3 critical concepts or sub-elements that convey what you are doing for your audience":
                    ["How do you connect & communicate Concept","Be Seen", "Be Heard",'Be Understood']
            },
        "Element 2 Questions: [M] Method":{
            "What is your internal structure that you use to connect and define your value? What does it look like? How do you express it?":
                ["Name Your Element:&nbsp;","Method"],
            
            "Within your METHOD framework, list the 3 critical concepts or sub-elements that convey what you are doing for your audience":
                ["What is important about your internal structure to connect & communicate Concept","Digital Assets", "Digital Keystone Foundations",'Digital Ecosystem']
        },
        "Element 3 Questions: [P] Process":{
            "What specific steps are critical to succeed? How do you personalise it? How do you surprise & delight? What is the one core value that you deliver for your audience?":
                ["Name Your Element:&nbsp;","Process"],
            
            "Within your PROCESS framework, list the 3 critical concepts or sub-elements that convey what you are doing for your audience":
                ["What steps are critical to succeed Concept","Value Creation", "Digital Experience",'Digital Delivery']
        },
        "Element 4 Questions: [S] Story":{
            "What journey are you bringing your audience on? What does it look like or what can they expect? How do they overcome things? How do you make them the hero of their story? What is the one core value that you deliver for through their story?":
                ["Name Your Element:&nbsp;","Story"],
            
            "Within your STORY framework, list the 3 critical concepts or sub-elements that convey what you are doing for your audience":
                ["What steps are critical to succeed Concept","Adaptable", "Connected",'Resourceful']
        },
        "Content #Hashtags":{
            "Ultimately, what are the 3 aspects that are fundamental or foundational to you and to your audience? What do they want to hear? How do you and them express these concepts? What is at the core of what you talk about? What do you want to discover and demonstrate? ":
                ["#Hashtag Concept #","#TheBlackWire", "#DigitalLeadership",'#DigitalGenius']
        },
    }

    // Data to be prefilled in the input boxes

    const mainElementData = {
        line1:"Audience",
        line2:"Be Understood",
        line3:"Be Seen",
        line4:"Be Heard",
        line5:"Method",
        line6:"Digital Keystone Foundations",
        line7:"Digital Assets",
        line8:"Digital Ecosystem",
        line9:"#TheBlackWire",
        line10:"#DigitalLeaderShip",
        line11:"#DigitalGenius",
        line12:"Story",
        line13:"Resourceful",
        line14:"Adaptable",
        line15:"Connected",
        line16:"Process",
        line17:"Digital Delivery",
        line18:"Value Creation",
        line19:"Digital Experience",
    }

    function innerElemetList(ls) {
        var val = '';
        const len = ls.length;
        ls.map((data,index)=>{
            let ai = '';
            if(index === 2){
                ai = 'b.'
            }else if(index === 3){
                ai = 'c.'
            }else{
                ai = 'a.'
            }
            let str = `
            <div class="flex flex-start font-normal font-weight-medium w100 ele-change" style='${ls.length === 2 ?"padding-left: 50px;":"padding-left: 40px;"}'>
                    ${len !== 2 && index !==0 ? `<div class="flex flex-center font-weight-medium " style="padding-right: 1%;">${ai}</div>`:'' }
                    ${index !== 0 ? `<div class="flex flex-center-center" style="width:47%;">${ls[0]} ${len !==2 ? `${index}`:''}:</div>`:''}
                    ${index !== 0 ? `<input type="text" placeholder="${ls[index]}" onfocus="this.placeholder=''" onblur="this.placeholder='${ls[index]}'" name="${ls[index]}">`:''}
            </div>`
            val = val + str
        });
        return val;
    }


    function innerElemetObj(obj){
        var val = '';
        Object.entries(obj).forEach((entry,index)=>{
            const [key, value] = entry
            let str =  `
                <div class="flex flex-start w100 font-normal font-weight-normal  p-small" style="padding-left: 20px;">
                    <div class="flex flex-center font-weight-medium" style="padding-right: 1%;">${index+1}.</div>
                    <div class="flex flex-center-center">
                        ${key}
                    </div>
                </div>
                ${innerElemetList(value)}
            `
            val = val + str;
        })
        
        return val
    }

    function outerElement(){
        let val = '';
        Object.entries(elementData).forEach((entry) => {
            const [key, value] = entry;
            let str = `
                <div class="flex flex-center-center w100 p-small">
                    <div class="flex flex-start w100 font-medium font-weight-medium">${key}</div>
                    ${innerElemetObj(value)}
                </div>
            `;
            val = val + str

        })
        $(".qa").append(
            val
        )
    }

    outerElement();

    // Element 1
        // Question : 1 (Audience)
        $("input[name='Audience']").keyup(function(e){
            if(e.target.value.length <= 32){
                $(".l1").text(e.target.value);
                mainElementData.line1 = e.target.value;
            }else if(e.target.value.length === 0){
                mainElementData.line1 = "Audience";
            }
        })

        // Question : 2 (3 Critical Concepts)

            // Concept 1: Be Seen
            $("input[name='Be Seen']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l3").text(e.target.value)
                    mainElementData.line3 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line3 = "Be seen";
                }
            })

            // Concept 2: Be Heard
            $("input[name='Be Heard']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l4").text(e.target.value)
                    mainElementData.line4 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line4 = "Be Heard";
                }
            })
            // Concept 3: Be Understood
            $("input[name='Be Understood']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l2").text(e.target.value)
                    mainElementData.line2 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line2 = "Be Understood";
                }
            })
    // Element 2 : Method
        // Question : 1 (Method Name)
        $("input[name='Method']").keyup(function(e){
            if(e.target.value.length <= 20){
                $(".l5").text(e.target.value)
                mainElementData.line5 = e.target.value
            }else if(e.target.value.length === 0){
                mainElementData.line5 = "Method";
            }
        });
        // Question : 2 (3 Critical Concepts)
            // Concept 1 : Digital Assets
            $("input[name='Digital Assets']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l7").text(e.target.value)
                    mainElementData.line7 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line7 = "Digital Access";
                }
            })
            // Concept 2 : Digital Keystone Foundations
            $("input[name='Digital Keystone Foundations']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l6").text(e.target.value)
                    mainElementData.line6 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line6 = "Digital Keystone Foundations";
                }
            })
            // Concept 3 : Digital Ecosystem
            $("input[name='Digital Ecosystem']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l8").text(e.target.value)
                    mainElementData.line8 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line8 = "Digital Ecosystem";
                }
            })
    // Element : 3 (Process)
        // Question 1 : Process Name
            $("input[name='Process']").keyup(function(e){
                if(e.target.value.length <= 32){
                    $(".l16").text(e.target.value)
                    mainElementData.line16 = e.target.value
                } else if(e.target.value.length === 0){
                    mainElementData.line16 = "Process";
                }
            })
        // Question 2 : (3 Critical Concepts)
            // Concept 1 : Value Creation
            $("input[name='Value Creation']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l18").text(e.target.value)
                    mainElementData.line18 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line18 = "Value Creation";
                }
            })
            // Concept 2 : Digital Experience
            $("input[name='Digital Experience']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l19").text(e.target.value)
                    mainElementData.line19 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line19 = "Digital Experience";
                }
            })
            // Concept 3 : Digital Delivery
            $("input[name='Digital Delivery']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l17").text(e.target.value)
                    mainElementData.line17 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line17 = "Digital Delivery";
                }
            })
    // Element 4 : Story
        // Question 1 : Story Name
        $("input[name='Story']").keyup(function(e){
            if(e.target.value.length <= 32){
                $(".l12").text(e.target.value)
                mainElementData.line12 = e.target.value
            }else if(e.target.value.length === 0){
                mainElementData.line12 = "Story";
            }
        })
        // Question 2 : (3 Critical Concepts)
            // Concept 1 : Adaptable
            $("input[name='Adaptable']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l14").text(e.target.value)
                    mainElementData.line14 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line14 = "Adaptable";
                }
            })
            // Concept 2 : Connected
            $("input[name='Connected']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l15").text(e.target.value)
                    mainElementData.line15 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line15 = "Connected";
                }
            })
            // Concept 3 : Resourceful
            $("input[name='Resourceful']").keyup(function(e){
                if(e.target.value.length <= 28){
                    $(".l13").text(e.target.value)
                    mainElementData.line13 = e.target.value
                }else if(e.target.value.length === 0){
                    mainElementData.line13 = "Resourceful";
                }
            })
    // Content Hashtags
        // Question : 3 Aspects
            // Hastag Concept 1 : #TheBlackWire
            $("input[name='#TheBlackWire']").keyup(function(e){
                if(e.target.value.length <= 15){
                    $(".l11").text(`#${e.target.value}`)
                    mainElementData.line11 = `#${e.target.value}`
                }else if(e.target.value.length === 0){
                    mainElementData.line11 = "#TheBlackWire";
                }
            })
            // Hastag Concept 2 : #DigitalLeadership
            $("input[name='#DigitalLeadership']").keyup(function(e){
                if(e.target.value.length <= 15){
                    $(".l9").text(`#${e.target.value}`)
                    mainElementData.line9 = `#${e.target.value}`
                }else if(e.target.value.length === 0){
                    mainElementData.line9 = "#DigitalLeaderShip";
                }
            })
            // Hastag Concept 3 : #DigitalGenius
            $("input[name='#DigitalGenius']").keyup(function(e){
                if(e.target.value.length <= 15){
                    $(".l10").text(`#${e.target.value}`)
                    mainElementData.line10 = `#${e.target.value}`
                }else if(e.target.value.length === 0){
                    mainElementData.line10 = "#DigitalGenius";
                }
            })

    let docReload = false;

    var csrf_token = "{{ csrf_token() }}";

    $('#reg-form1').submit(function(event){

        var error = 0;
        var full_name = $('.rf0').val();
        var email = $('.rf1').val();
        var cno = $('.rfe2').val();
        var loc = $('.rfe3').val();
        var comp_web = $('.lsf').val();

        $(".rf").each(function(index){
            if($(`.rf${index}`).val()==""){
                $(`.rf${index}`).css({"border":"1px solid red"});
                error = error + 1
                event.preventDefault();
                return false;
            }else{
                $(`.form${index}`).css({"border":"1px solid black"});
                
            }
       });

       if(email !=='' && !email.match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
            $(".rf1").css({"border":"1px solid red"});    
            $(".error").empty().text("Please enter valid mail")
            error = error + 1
            event.preventDefault();
            return false;
       }else if(cno !=='' && !cno.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
            $(".rf2").css({"border":"1px solid red"});
            $(".error").empty().text("Please enter valid contact number")
            error = error + error
            event.preventDefault();
            return false;
       }
        
       if(error === 0){

            $.ajax({
                url: '/creator/studio/',
                type: "POST",
                headers: {
                    "X-CSRFToken": csrf_token,
                },
                data: {
                    "full_name" : full_name,
                    "email" : email,
                    "contact_number" : cno,
                    "location" : loc,
                    "company_website" : comp_web,
                    "element_data" : JSON.stringify({mainElementData}),
                },
                beforeSend: function() {
                    $("#reg-form1").hide();
                    $(".form-head").css({"display":"none"});
                    $(".reg-form-inner").css({"height":"40vh"})
                    $(".load-cont").css({"display":'flex'});
                },
                success: function (data ){
                    $(".load-cont").css({"display":'none'});
                    $(".form-head").text('')
                    $(".success-sec").css({"display":"flex"});
                    $(".download").append(`
                        <a href="${window.location.origin}/static/pdf/${JSON.parse(data).link}" download>Click Here</a> to download & email your Stratahedron Model Design.
                    `)
                    docReload = true;
                },
                error: function(error) {
                    $("#reg-form1").show();
                    $(".form-head").css({"display":"flex"});
                    $(".form-head").empty().text("Please Enter your Details to Complete Your Design")
                    $(".reg-form-inner").css({"height":"auto"})
                    $(".load-cont").css({"display":'none'});
                    console.log(error)
                    $(".error").empty().text("Some unrecognized error");
                },
            })
       }
       return false;
    });

    $(".pop-up").click(function(){
        $(".reg-outer-container").css({'display':'flex'});
    })


    $(".cross").click(function(){
        $(".reg-outer-container").hide();
        docReload ? window.location.reload():false;
    })
    $('.rf0').keyup(function(){
        $('.rf0').css({"border":"1px solid black"})
    })

    $('.rf1').keyup(function(){
        $('.rf1').css({"border":"1px solid black"})
        $(".error").empty();
    })

    $('.rf2').keyup(function(){
        $('.rf2').css({"border":"1px solid black"})
        $(".error").empty();
    })

    $('.rf3').keyup(function(){
        $('.rf3').css({"border":"1px solid black"})
    })

});