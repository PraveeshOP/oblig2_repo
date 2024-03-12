$(document).ready(function () {

    $("#send").click(function(){
        let filmValg = $("#filmValg").val();
        let antall = $("#antall").val();
        let antall_value = Number(antall);
        let fornavn = $("#fornavn").val();
        let etternavn = $("#etternavn").val();
        let telefonnr = $("#telefonnr").val();
        let epost = $("#epost").val();
        let regExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm; // test for epost
        let regExp1 = /^(0047|\+47|47)?[2-9]\d{7}$/; // test for telefonnr

        if (filmValg == "Velg Film Her" && antall == "" && fornavn == "" && etternavn == "" && telefonnr == "" && epost == "") {
            $("#filmValgError").html("Må velge filmen.");
            document.getElementById("antallError").innerHTML = "Må skrive noe inn in antall."
            document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
            document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i ettternavnet";
            document.getElementById("telefonError").innerHTML = "Må skrive noe inn i telefonnr";
            document.getElementById("epostError").innerHTML = "Må skrive noe inn i epost";
        }
        else if (filmValg == "Velg Film Her" || antall == "" || fornavn == "" || etternavn == "" || telefonnr == "" || epost == ""){
            alert("Vennligst skriv inn gyldige data!")
        }
        else {
            if (isNaN(antall_value) === true) {
                document.getElementById("filmValgError").innerHTML = " ";
                document.getElementById("antallError").innerHTML = "Vennligst skriv inn gyldig tall."
                document.getElementById("fornavnError").innerHTML = " ";
                document.getElementById("etternavnError").innerHTML = " ";
                document.getElementById("telefonError").innerHTML = " ";
                document.getElementById("epostError").innerHTML = " ";
            } else if (regExp1.test(telefonnr) === false) {
                document.getElementById("filmValgError").innerHTML = " ";
                document.getElementById("antallError").innerHTML = " "
                document.getElementById("fornavnError").innerHTML = " ";
                document.getElementById("etternavnError").innerHTML = " ";
                document.getElementById("telefonError").innerHTML = "Feil telefon nummer";
                document.getElementById("epostError").innerHTML = " ";
            } else if (regExp.test(epost) === false) {
                document.getElementById("filmValgError").innerHTML = " ";
                document.getElementById("antallError").innerHTML = " "
                document.getElementById("fornavnError").innerHTML = " ";
                document.getElementById("etternavnError").innerHTML = " ";
                document.getElementById("telefonError").innerHTML = " ";
                document.getElementById("epostError").innerHTML = "Feil Epost";
            } else {
                let person = {
                    filmValg: filmValg,
                    antall: antall_value,
                    fornavn: fornavn,
                    etternavn: etternavn,
                    telefonnr: telefonnr,
                    epost: epost
                }
                $.post("/lagre", person,function(){
                    hentAlle();
                });
                document.getElementById("filmValgError").innerHTML = " ";
                document.getElementById("antallError").innerHTML = " "
                document.getElementById("fornavnError").innerHTML = " ";
                document.getElementById("etternavnError").innerHTML = " ";
                document.getElementById("telefonError").innerHTML = " ";
                document.getElementById("epostError").innerHTML = " ";

                $("#filmValg").val("Velg Film Her");
                $("#antall").val("");
                $("#fornavn").val("");
                $("#etternavn").val("");
                $("#telefonnr").val("");
                $("#epost").val("");
            }
        }
    })
    function hentAlle(){
        $.get("/hentAlle",function(data){
            formaterData(data);
        });
    }
    function formaterData(kunder){
        let ut = "<table class='table table-striped'><tr><th align='center'>Film</th><th align='center'>Antall</th><th align='center'>Fornavn</th><th align='center'>Etternavn</th><th align='center'>Telefonnr</th><th align='center'>Epost</th></tr>";
        for(const i of kunder) {
            ut += "<tr>" +
                "<td align='center'>" + i.filmValg + "</td>" +
                "<td align='center'>" + i.antall + "</td>" +
                "<td align='center'>" + i.fornavn + "</td>" +
                "<td align='center'>" + i.etternavn + "</td>" +
                "<td align='center'>" + i.telefonnr + "</td>" +
                "<td align='center'>" + i.epost + "</td>" +
                "</tr>";
        }
        ut+="</table>";
        $("#billettene").html(ut);
    }

    $("#slettBillettene").click(function () {
        $.get("/slettAlle",function(){
            hentAlle();
        })
    })
})