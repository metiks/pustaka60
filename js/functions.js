function viewArticle(pdf_file, team_names, ppt_link){
	parent.document.getElementById("pdf_load").src = pdf_file;
	parent.document.getElementById("team_load").innerHTML = team_names;
	parent.document.getElementById("ppt_load").innerHTML = ppt_link;
}

function loadTeam(kelompok){
	//window.alert(kelompok);
    for (var i=0; i<=kelompok; i++) {
        	team_rubrik = teamDesc[i][1];
		team_file = teamDesc[i][2];
		
		team_members = "<H3>PENULIS</H3>" + "<ul>";

	 	jum_team = anggota[kelompok].length;

	 	for (var j=0; j<jum_team; j++) {
			team_members = team_members + "<li>" + anggota[kelompok][j] ; 		 	
	 	}
	 	team_members = team_members + "</ul>";
	}
	
   	file_loc = "https://drive.google.com/file/d/" + team_file + "/preview";
	ppt_loc =  "materi/PPT/" + team_rubrik + "Kelompok" + kelompok + ".pptx";
	ppt_link =  '<a href="'+ppt_loc+'">'+'File Presentasi'+'</a>';	
	window.alert(file_loc);
  	return viewArticle( file_loc, team_members, ppt_link);
}

