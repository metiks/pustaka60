function viewArticle(pdf_file, team_names, ppt_link){
	parent.document.getElementById("pdf_load").src = pdf_file;
	parent.document.getElementById("team_load").innerHTML = team_names;
	parent.document.getElementById("ppt_load").innerHTML = ppt_link;
}

function loadTeam(kelompok){
	//window.alert(kelompok);
    for (var i=0; i<=kelompok; i++) {
        rubrik = teamDesc[i][1];

		detailTeam = "<H3>PENULIS</H3>" + "<ul>";

	 	jum_team = anggota[kelompok].length;

	 	for (var j=0; j<jum_team; j++) {
			detailTeam = detailTeam + "<li>" + anggota[kelompok][j] ; 		 	
	 	}
	 	detailTeam = detailTeam + "</ul>";
	}
	
    	file_loc = "materi/" + rubrik + "Kelompok" + kelompok + "-Laporan.pdf";
   	ppt_loc =  "materi/PPT/" + rubrik + "Kelompok" + kelompok + ".pptx";
	//file_loc = 'test';
	//ppt_loc = 'test2';
	ppt_link =  '<a href="'+ppt_loc+'">'+'File Presentasi'+'</a>';	
  	return viewArticle( file_loc, detailTeam, ppt_link);
}

