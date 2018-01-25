function viewArticle(pdf_file, team_names, ppt_link){
	parent.document.getElementById("pdf_load").src = pdf_file;
	parent.document.getElementById("team_load").innerHTML = team_names;
	parent.document.getElementById("ppt_load").innerHTML = ppt_link;
}

function loadTeam(kelompok){
    for (var i=0; i<=kelompok; i++) {
        rubrik = teamDesc[i][1];

		detailTeam = "<H3>PENULIS</H3>" + "<ul>";

	 	jum_team = anggota[kelompok].length;

	 	for (var j=0; j<jum_team; j++) {
			detailTeam = detailTeam + "<li>" + anggota[kelompok][j] ; 		 	
	 	}
	 	detailTeam = detailTeam + "</ul>";
	}
	
    file_loc = "https://drive.google.com/drive/folders/1elYhgvaFUPBmLPga4PVBex7iIWKxJEry/materi/" + rubrik + "Kelompok" + kelompok + "-Laporan.pdf";
    ppt_loc =  "https://drive.google.com/drive/folders/1elYhgvaFUPBmLPga4PVBex7iIWKxJEry/materi/PPT/" + rubrik + "Kelompok" + kelompok + ".pptx";
	ppt_link =  '<a href="'+ppt_loc+'">'+'File Presentasi'+'</a>';
    window.alert(file_loc);
  	return viewArticle( file_loc, detailTeam, ppt_link);
}

