function calendar(mes) {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getYear();

    if (year <= 200) {
        year += 1900;
    }

    months = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    var mesAtual = month;

    month = mes;

    //ano bissesto, muda dia fevereiro
    if (year % 4 == 0 && year != 1900) {
        days_in_month[1] = 29;
    }


    total = days_in_month[month]; 

    var date_today = day + ' ' + months[month] + ' ' + year; 

    diaHoje = date; //data de hoje

    if (month > 0) {
        soma = 0;
        for (var m = 0; m < month; m++) {
            soma += days_in_month[m];
        }
        diaHoje.setDate(soma + 1);
    } else {
        diaHoje.setDate(1);
    }


    if (diaHoje.getDate() == 2) 
    {
        diaHoje = setDate(0);
    }   
    diaHoje = diaHoje.getDay();

    document.write('<table class="cal_calendar table"><tr><th colspan="7" class="text-center">' + months[mes] + ' ' + year + '</th></tr><br>');
    document.write('<tr class="cal_d_weeks"><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th></tr><tr>');
    week = 0;

     //dias mês passado
    for (i = 1; i <= diaHoje; i++) {
        var beforemonth = months[month - 1];

        document.write('<td><div class ="divday" />' + (days_in_month[month - 1] - diaHoje + i) + '</div></td>');
        document.write("<div class='modal fade' id='DiaModal" + i + months[mes] +"' tabindex='-1' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><form><div class='form-floating'><textarea class='form-control p-1' id='ScheduleText'></textarea> </div><div class='my-3 d-block'><input class='form-control form-control-sm' type='file' id='formFileMultiple' multiple></div><div class='my-3 form-check'><input type='checkbox' class='form-check-input' id='checkSchedule'><label class='form-check-label' for='checkSchedule'>Marcar como feito</label></div><div class='row'><button type='submit' class='btn btn-success col-sm-4 mx-auto'>Salvar</button><button type='button' class='btn btn-danger col-sm-4 mx-auto' data-bs-dismiss='modal'>Fechar</button></div></form></div></div> </div></div>")
        
        week++;
    }
    for (i = 1; i <= total; i++) {
        if (week == 0) {
            document.write("<tr>");
        }
        //dia atual
        if (day == i && mesAtual == month) 
        {

            document.write("<td><div class ='divtoday fw-bold' href='#'> <a id='linkDias' data-bs-toggle='modal' data-bs-target='#DiaModal"+ i + months[mes] + "'>" + i + "</a> </div></td>");
            document.write("<div class='modal fade' id='DiaModal" + i + months[mes] +"' tabindex='-1' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><form><div class='form-floating'><textarea class='form-control p-1' id='ScheduleText'></textarea> </div><div class='my-3 d-block'><input class='form-control form-control-sm' type='file' id='formFileMultiple' multiple></div><div class='my-3 form-check'><input type='checkbox' class='form-check-input' id='checkSchedule'><label class='form-check-label' for='checkSchedule'>Marcar como feito</label></div><div class='row'><button type='submit' class='btn btn-success col-sm-4 mx-auto'>Salvar</button><button type='button' class='btn btn-danger col-sm-4 mx-auto' data-bs-dismiss='modal'>Fechar</button></div></form></div></div> </div></div>")

        }
        //dias do mês seguinte
        else {

            document.write("<td><div class ='divday' href='#'> <a id='linkDias' data-bs-toggle='modal' data-bs-target='#DiaModal"+ i + months[mes] + "'>" + i + "</a> </div></td>");
            document.write("<div class='modal fade' id='DiaModal" + i + months[mes] +"' tabindex='-1' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><form><div class='form-floating'><textarea class='form-control p-1' id='ScheduleText'></textarea> </div><div class='my-3 d-block'><input class='form-control form-control-sm' type='file' id='formFileMultiple' multiple></div><div class='my-3 form-check'><input type='checkbox' class='form-check-input' id='checkSchedule'><label class='form-check-label' for='checkSchedule'>Marcar como feito</label></div><div class='row'><button type='submit' class='btn btn-success col-sm-4 mx-auto'>Salvar</button><button type='button' class='btn btn-danger col-sm-4 mx-auto' data-bs-dismiss='modal'>Fechar</button></div></form></div></div> </div></div>")
        } 
        week++;
        if (week == 7) {
            document.write('</tr>');
            week = 0;
        }
    }
    // dias do mês
    for (i = 1; week != 0; i++) {
        var nextmonth = months[month + 1];
        document.write("<td><div class ='divday' href='#'> <a  id='linkDias' data-bs-toggle='modal' data-bs-target='#DiaModal"+ i +  months[mes] + "'>" + i + "</a> </div></td>");
        document.write("<div class='modal fade' id='DiaModal" + i + months[mes] +"' tabindex='-1' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><form><div class='form-floating'><textarea class='form-control p-1' id='ScheduleText'></textarea> </div><div class='my-3 d-block'><input class='form-control form-control-sm' type='file' id='formFileMultiple' multiple></div><div class='my-3 form-check'><input type='checkbox' class='form-check-input' id='checkSchedule'><label class='form-check-label' for='checkSchedule'>Marcar como feito</label></div><div class='row'><button type='submit' class='btn btn-success col-sm-4 mx-auto'>Salvar</button><button type='button' class='btn btn-danger col-sm-4 mx-auto' data-bs-dismiss='modal'>Fechar</button></div></form></div></div> </div></div>")
        week++;
        if (week == 7) {
            document.write('</tr>');
            week = 0;
        }
    }
    document.write('</table>');
}