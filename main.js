$('form').on('submit', function(e){
    e.preventDefault();

    const inputTarefa = $("#tarefa").val();
        const novaTarefa = $("<tr><td>" + inputTarefa + "</td></tr>");

        $("#tabela tbody").append(novaTarefa);

        $("#tarefa").val("");
    });

    $("#tabela").on("click", "tr", function() {
        $(this).toggleClass("marcartarefa");
    });

