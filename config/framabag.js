var f$_config = 'local';

var f$_url = window.location.href;
if(f$_url.indexOf('framabag.org/u') > -1) {
// Si on n'est pas dans wallabag
  var f$_nav_extra_css = true;
  var f$_jquery = 'fQuery';

// Force la désactivation des fenêtres modales, du bandeau et du macaron
  var f$_alert_text = '';
  var f$_alert_modal_text = '';
  var f$_modal_don_liendl = '';
  var f$_donate = false;

}
