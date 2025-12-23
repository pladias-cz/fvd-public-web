import $ from 'jquery';
import {getAppBasePath, redirect} from "pladias-geoservices/src/common/http_helpers";
import 'jquery-ui/ui/widgets/autocomplete';

export default function autocomplete() {
    $(".autocomplete").each(function () {

        $(this).autocomplete( {
            source:  getAppBasePath() + $(this).data('source'),
            minLength: 2,
            select: function (event, ui) {
                //console.log( ui.item);
                // console.log($(this).data('target')+ '/' + ui.item.value);
                $('body').css('cursor', 'wait');
                let newLocation = getAppBasePath() + $(this).data('target') + '/' + encodeURIComponent(ui.item.value);
                redirect(newLocation);
            }
        });
        if ($(this).data('listen-enter')) {
            $(this).keypress(function (e) {
                let key = e.which;
                if (key === 13)  // the enter key code
                {
                    let newLocation = getAppBasePath() + $(this).data('target') + '/' + $(this).val();
                    redirect(newLocation);
                }
            });
        }
    });
}