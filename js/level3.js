function checkAnswer(){
	if($('#password')[0].value=="1")
		gotoNextLevel();
	else
		wrongAnswer();
}