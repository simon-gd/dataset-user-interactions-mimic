<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store">
    <meta http-equiv="Pragma" content="no-cache">
    
    <title>experiscope</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="css/bootstrap.css" rel="stylesheet">
  
   <style type="text/css">
    body {
      font-family: Sans-Serif;
      /*font-size: 75%;*/
      padding-top: 10px;
      padding-left: 10px;
    }
    table {
      font-family: Sans-Serif;
      /*font-size: 100%;*/
    }
    hr{
      border-top: 1px solid #000000;
    }
    br {
      display: block;
      width: 100%;
    }
    </style>
    
    <script type="text/javascript" src="js/lib/jquery-2.0.3.js"></script>
  
  </head>

  <body id="body">
     <script type="text/javascript">
        function getURLParameter(name) {
            return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,8888])[1]
            );
        }
        function showPage(elementID) {
                // try to find the requested page and alert if it's not found
                $(".page").hide();
                $(elementID).show();
              
        }
        function createLikertScale(name, width, labels, onchange) {
            var nbValues = labels.length;
            var s = "";
            s += '<table id="LikertScale_'+name+'" width="' + width + '" border="0" cellspacing="3" style="table-layout:fixed; border-width: 1px; border-color:#CCCCCC; border-style: solid;">';
            for (var i=1; i<=nbValues; i++)
                    s += '<col id="col_'+i+'" width="' + width/nbValues + '" align="center">';
            s += '<tr id="LikertScale_tr_1" style="font-size: 95%">';
            for (var i=1; i<=nbValues; i++)
                    s += '<td id="td_' + (name + i + "label") + '" align="center"><span id="' + (name + i + "label") + '">' + labels[i-1] + '</span></td>';
            s += '</tr><tr id="LikertScale_tr_1">';
            for (var i=1; i<=nbValues; i++)
                    s += '<td id="td_'+ (name + i) +'" align="center"><label id="label_'+ (name + i) +'" class="radio inline"><input type="radio" id="' + (name + i) + '" name="' + name + '" value="' + i + '" onclick="' + onchange + '">' + i + '</label></td>';
            s += '</tr></table>';
            document.write(s);
        }

        //
        // SCENARIO HTML CODE
        //
        function getHTMLforScenarioText(text, question, icon_path, c1_image_path,condition)
        {
           var s = "";
          // s += '<h3>' + title + '</h3>';
           s+= '<hr id="hr_scenario">';
        
           imageHTML = '<img id="scenarioIcon" alt="" style = "vertical-align: top" src ="'+icon_path+'"/>';
           textHTML = text;
           s+= '<table id="scenarioTable" border="0" cellpadding="0" cellspacing="10" width="100%"><tr id="scenarioTable_tr1" valign="top"><td id="scenarioTable_td1" border="0" width="90px">' + imageHTML + '</td> \
                <td id="scenarioTable_td2"><div id="scenarioTable_div1" style="background: #F5F5F5; padding: 1em; border: #D0D0D0 solid 1px;">' + textHTML + '</div></td></tr></table>';
        
           if (condition > 0) {
                        s += '<p id="description_paragraph4">This is illustrated by the following diagram:</p>';
                        s += '<p id="description_paragraph5"><img id="diagram1" alt="" src ="'+ c1_image_path +'"/></p>';
                }
           s += '<br id="br1"><p id="description_paragraph6">Please answer the following question:</p>';
           s += '<p id="question1"><div id="question1_div" style="background: #F5F5F5; padding: 1em; border: #D0D0D0 solid 1px;">' + question + '</div></p>';
           s += '</table>';
           return s;
        }

         function updateFinalQuestions(condition) {
            var conditionNumber = condition;
                  
            document.getElementById('usedTextQuestion').innerHTML = "Did you use the information in the <b id='b1'>text</b> to get your answer to the mammography problem?";
            document.getElementById('usedText1label').innerHTML = "Did not use it at all";
            document.getElementById('usedText3label').innerHTML = "Somehow used it";
            document.getElementById('usedText5label').innerHTML = "Used it a lot";

            if (conditionNumber > 0) {
              document.getElementById('usedIntro').innerHTML = "Recall the mammography problem was presented to you through a short piece of <b id='b2'>text</b> followed by a visual <b id='b3'>diagram</b>.";
              document.getElementById('usedDiagramQuestion').innerHTML = "Did you use the <b id='b4'>diagram</b> to get your answer to the mammography problem?";
              document.getElementById('usedDiagram1label').innerHTML = "Did not use it at all";
              document.getElementById('usedDiagram3label').innerHTML = "Somehow used it";
              document.getElementById('usedDiagram5label').innerHTML = "Used it a lot";
            } else {
              document.getElementById('usedIntro').innerHTML = "Recall the mammography problem was presented to you through a short piece of <b id='b5'>text</b>.";
              var s = "";
              var icon_path = "img/micallef/si.png";
              var diagram_path = "img/micallef/v1.png";
              s+= '<br id="br1">';
              var iconHTML = '<img id="img1" alt="" style = "vertical-align: top" src ="' + icon_path + '"/>';
              var textHTML = "10 out of every 1,000 women at age forty who participate in routine screening have breast cancer. <br id='br2>8 of every 10 women with breast cancer will get a positive mammography. <br id='br3'>95 out of every 990 women without breast cancer will also get a positive mammography. <br id='br5'>";
              s+= '<table id="updateFinalQuestionsTable" border="0" cellpadding="0" cellspacing="10" width="100%"><tr id="tr1" valign="top"><td id="td1" border="0" width="90px">' + iconHTML + '</td><td id="td2"><div id="div_prob1" style="background: #F5F5F5; padding: 1em; border: #D0D0D0 solid 1px;">' + textHTML + '</div></td></tr></table>';
              s += '<p id="p1"><img id="img2" alt="" style = "vertical-align: top" src ="'+diagram_path+'"/></p>';
                document.getElementById('usedDiagramQuestion0').innerHTML = 'Now suppose the following diagram was provided in addition to the text:<br id="br4">' + s;
              document.getElementById('usedDiagramQuestion').innerHTML = 'Would you have used this <b id="b6">diagram</b> to get your answer to the mammography problem?';
              document.getElementById('usedDiagram1label').innerHTML = "Not at all";
              document.getElementById('usedDiagram3label').innerHTML = "Somehow";
              document.getElementById('usedDiagram5label').innerHTML = "Would have used it a lot";
            }

            if (document.getElementById('usedDiagram1').checked) {
              document.getElementById('usedDiagramSpecify').innerHTML = conditionNumber > 0 ? "Please briefly explain <b id='b7'>why</b> you did not rely on it:" : "Please briefly explain <b id='b8'>why</b> you would not have relied on it:";
            }
            if (document.getElementById('usedDiagram2').checked) {
              document.getElementById('usedDiagramSpecify').innerHTML = conditionNumber > 0 ? "Please briefly explain <b id='b9'>how</b> you used it and <b id='b10'>why</b> you did not rely on it more:" : "Please briefly explain <b id='b11'>how</b> you would have used it and <b id='b12'>why</b> you would not have relied on it more:";
            }
            if (document.getElementById('usedDiagram3').checked) {
              document.getElementById('usedDiagramSpecify').innerHTML = conditionNumber > 0 ? "Please briefly explain <b id='b13'>how</b> you used it and <b id='b14'>why</b> you did not rely on it more:" : "Please briefly explain <b id='b15'>how</b> you would have used it and <b id='b16'>why</b> you would not have relied on it more:";
            }
            if (document.getElementById('usedDiagram4').checked) {
              document.getElementById('usedDiagramSpecify').innerHTML = conditionNumber > 0 ? "Please briefly explain <b id='b17'>how</b> you used it and <b id='b18'>why</b> you did not rely on it more:" : "Please briefly explain <b id='b19'>how</b> you would have used it and <b id='b20'>why</b> you would not have relied on it more:";
            }
            if (document.getElementById('usedDiagram5').checked) {
              document.getElementById('usedDiagramSpecify').innerHTML = conditionNumber > 0 ? "Please briefly explain <b id='b20'>how</b> you used it:" : "Please briefly explain <b id='b21'>how</b> you would have used it:";
            }
        }

        $(document).ready(function() {
          var current_question = getURLParameter("question");
          var questionCondition = getURLParameter("condition");
          showPage("#page"+current_question);

          var scenario_text = "10 out of every 1,000 women at age forty who participate in routine screening have breast cancer. <br id='br2'>8 of every 10 women with breast cancer will get a positive mammography. <br id='br3'>95 out of every 990 women without breast cancer will also get a positive mammography. <br id='br5'>";
          var question = "Here is a new representative sample of women at age forty who got a positive mammography in routine screening. <br id='br4'>How many of these women do you expect to actually have breast cancer?";
          var icon_path = "img/micallef/si.png";
          var c1_image_path = "img/micallef/v1.png";
          
          $('#scenario').html(getHTMLforScenarioText(scenario_text, question, icon_path, c1_image_path, questionCondition));
          updateFinalQuestions(questionCondition);


        });

      </script>   
<div id="page1" class="page">
 <p id="page_count">Page 1/4</p><hr id="hr1">

<center id="center1"><h5 id="page_title">Scientific Study on Judgment and Visualization</h5></center>

<center id="center2"><p id="p1"><img id="teaser_image" src="img/micallef/teaser.jpg"></p></center>

<h5 id="description_title1">Important:</h5>

<p id="description_paragraph1">You can participate in this series of experiments <b id="bold1">only once</b>. If you have already completed a HIT with the same title (even a while ago), you <b id="bold2">cannot</b> complete this one and we would have to reject your HIT.</p>

<p id="description_paragraph2">This HIT takes about 5 minutes to complete.</p>

<p id="description_paragraph3">Read the instructions carefully and answer all questions before proceeding to the next page. HITs that are not completed carefully will be <b id="bold3">rejected</b> and the worker will not be paid.</p>

<p id="description_paragraph4">You should remain focused, and once you start the HIT, you must not stop unless you have completed all the pages. Special attention must be given to the next page.</p>

<p id="question1">Are you ready to start the HIT?</p>

<select id="input" class="input-small" name="ready">
<option id="input_option1" value=""></option>
<option id="input_option2" value="yes">Yes</option>
</select>
<hr id="hr2">
<input id="submit" type="submit" name="submit" value="Next page">
<font id="font1" color="#999999"><div id="firstbuttonmessage">(you cannot return to this page afterwards)</div></font>
</div>

<div id="page2" class="page">
<p id="page_count">Page 2/4</p><hr id="hr1">
<h5 id="page_title">Problem</h5>
<p id="description_paragraph1">Read the text below carefully and answer the question as best as you can.</p>
<p id="description_paragraph2">You can use any method or tool to get your answer (pen and paper, calculator,...), or you can use no tool at all.</p>
<p id="description_paragraph3">Your answer does not need to be exact.</p>
<div id='scenario'>
10 out of every 1,000 women at age forty who participate in routine screening have breast cancer. <br id='br6'> <br id='br7'>
8 of every 10 women with breast cancer will get a positive mammography. <br id='br8'>
95 out of every 990 women without breast cancer will also get a positive mammography. <br id='br9'>
</div>
<p id="answer_paragraph1">Your answer: &nbsp; <input id="answer1" class="input-small" type="text" maxlength="40" size="4" name="scenario_nominator" value=""/> out of <input id="answer2" class="input-small" type="text" maxlength="40" size="4" name="scenario_denominator" value=""/></p>
<p id="question_paragraph2">How confident are you in your answer?</p>
<script type="text/javascript">
createLikertScale('confidence', 400, ['No Confidence', '', 'Reasonable Confidence', '', 'Very High Confidence']); <!-- confidence scale from http://udi.uconn.edu/index.php?q=node/353 -->
</script>
<hr id="hr2">
<input id="submit" type="submit" name="submit" value="Next page">
<font id="font1" color="#999999"><span id="firstbuttonmessage">(you cannot return to this page afterwards)</span></font>
</div>

<div id="page3" class="page">
<p id="page_count">Page 3/4</script></p><hr id="hr1">
<h5 id="page_title">Double-Check Question</h5>
<p id="description_p1">The question below is simply to make sure you have read the problem statement.</p>

<hr id="hr2">
<p id="description_p3">Which topic was part of the problem presented to you just before?</p>
<select id="select1" class="input-medium" name="check">
<option id="select1_o1" value=""></option>
<option id="select1_o2" value="1">Car accident</option>
<option id="select1_o3" value="2">History course</option>
<option id="select1_o4" value="3">Airplane crash</option>
<option id="select1_o5" value="4">Cancer</option>
<option id="select1_o6" value="5">Students</option>
<option id="select1_o7" value="6">Red cab</option>
<option id="select1_o8" value="7">Economics</option>
</select></p>
<hr id="hr3">
<input id="submit" type="submit" name="submit" value="Next page">
<font id="font1" color="#999999">(you cannot return to this page afterwards)</font>
</div>

<div id="page4" class="page">
 <p id="page_count">Page 4/4</p><hr id="hr1">

<h5 id="page_title">Final Questions</h5>

<p id="p2">Please take two more minutes to answer the questions below. Remember that you have to complete all the questions in the HIT to get your reward.</p>

<hr id="hr1">

<p id="p3"><b id='b22'>Q1. </b> Did you try to compute an <b id='b23'>exact answer</b> to the mammography problem? (as opposed to just estimating the answer)</p>
<p id="p4"><select id="s1" class="input-small" name="calculationQuestion">
<option id="select1op0" value=""></option>
<option id="select1op1" value="1">Yes</option>
<option id="select1op2" value="0">No</option>
<option id="select1op3" value="2">Unsure</option>
</select></p>

<hr id="hr1">

<p id="p5"><span id="usedIntro">Sorry, there was a problem loading this page. Please contact us by e-mail.</span></p>

<p id="p6"><b id='b24'>Q2. </b><span id="usedTextQuestion">Sorry, there was a problem loading this page. Please contact us by e-mail.</span></p>
<script type="text/javascript">
createLikertScale('usedText', 560, ['', '', '', '', ''], "updateFinalQuestions();");
</script>

<hr id="hr1">

<p id="p8"><span id="usedDiagramQuestion0"></span></p>
<p id="p9"><b id='b25'>Q3. </b><span id="usedDiagramQuestion">Sorry, there was a problem loading this page. Please contact us by e-mail.</span></p>
<script type="text/javascript">
createLikertScale('usedDiagram', 560, ['', '', '', '', ''], "updateFinalQuestions(); document.getElementById('usedDiagramExplanations').focus();");
</script>

<p id="p10"><div id="usedDiagramSpecify"></div></p>
<textarea class="input-xxlarge" id="usedDiagramExplanations" name="usedDiagramExplanations" rows="3" cols="70">
</textarea></p>

<hr id="hr1">

<p id="p11"><b id='b26'>Q4. </b>Did you previously start another HIT identical or similar to this but <b id='b27'>without successfully submitting it</b> (e.g., because you experienced technical difficulties or because you gave up)? Your answer will <b id='b28'>not</b> affect our decision to accept or reject this HIT.</p>
<p id="p12"><select id="select2" class="input-small" name="reloadQuestion">
<option id="select2op0" value=""></option>
<option id="select2op1" value="1">Yes</option>
<option id="select2op2" value="0">No</option>
<option id="select2op3" value="2">Unsure</option>
</select></p>

<hr id="hr1">

<p id="p13">Any other comments:</p>
<textarea class="input-xxlarge" id="optionalComments" name="comments" rows="4" cols="70">
</textarea>

<p id="p14"><b id='b29'>Thank You!</b></p>
<p id="p15">Thank you very much for participating in our experiment. Now click on the submit button to complete this HIT.<br id='br10'>

<hr id="hr1"><input type="submit" id="submit" value="Submit"/>
<font id="font1" color="#999999">(this will submit all pages)</font>
</div>


  </body>
</html>
