/* ---------------------------------------------------------------------- */
/*	Contact */
/* ---------------------------------------------------------------------- */

function validContact(element) {
    var verbe = "Indiquez ",
        email = "une adresse email.",
        emailvalide = "une adresse email valide.",
        nom = "un nom.",
        det = "un",
        emailformat = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i'),
        x = element["Nom"].value;

    if (langue != "fr") {
        verbe = "Specify ";
        email = "an email address.";
        emailvalide = "a valid email address.";
        nom = "a name.";
        det = "a";
    }

    if (x == null || x == "") {
        alert(verbe + nom);
        return false;
    }

    x = element["Email"].value;
    if (x == null || x == "") {
        alert(verbe + email);
        return false;
    }
    if (!emailformat.test(x)) {
        alert(verbe + emailvalide);
        return false;
    }

    x = element["Message"].value;
    if (x == null || x == "") {
        alert(verbe + det + " message.");
        return false;
    }

    return true;
}



/* ---------------------------------------------------------------------- */
/*	Popup */
/* ---------------------------------------------------------------------- */
var init = false;
var credit;
var maj;
var date = "03/11/2016";

function open_infos(){
    $.fancybox(credit+" Icons made by <a href='http://www.freepik.com' title='Freepik'>Freepik</a> from <a href='http://www.flaticon.com' title='Flaticon'>www.flaticon.com</a> are licensed under <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0'>CC BY 3.0</a>."+maj+date);
}

/* ---------------------------------------------------------------------- */
/*	CV */
/* ---------------------------------------------------------------------- */

setTimeout(desktop_cv,4000);
function desktop_cv() {
    document.getElementById('desktop_cv').classList.add('volet');
}

/* ---------------------------------------------------------------------- */
/*	Langues */
/* ---------------------------------------------------------------------- */

var langue = window.navigator.userLanguage || window.navigator.language;
function langues() {
    var choix_h1 = '<div style="color:white;text-align: center;font-size:25px;">';

    if (window.location.href.indexOf("/en") > -1)
    {
       if ((langue == "fr" || langue == "fr-fr" || langue == "fr-FR") && window.location.href.indexOf("/#") == -1) {
           $.fancybox( choix_h1+'Parlez-vous le français ?</div><div style="color:white;font-style:italic;text-align:center;">Il semblerait que votre navigateur web soit en Français.</div><div style="margin-top:10px;color:white;line-height:4em;margin-left:20%;height: 4em;"><div class="choix c-langues"><a href="../">Oui</a></div><div style="float:left;margin:0 10px;">ou</div><div class="choix c-langues"><a href="#" onclick="parent.$.fancybox.close();">Non</a>');
        }
        $('head').append('<style>.image:before{content: "Go the website";}</style>');
        $(".cv").fancybox({
            afterLoad   : function() {
                this.content = choix_h1+'Two styles - two resumes</div><div style="margin-top:10px;color:white;line-height:4em;margin-left:10px"><div class="choix c-cv"><a href="/CV_Style.pdf" target="_new">Styled</a></div><div style="float:left;margin:0 10px;">or</div><div class="choix c-cv"><a href="/CV_Classique.pdf" target="_new">Classic</a>';
                }
        });
        credit =  "<h1 style='margin-bottom:10px;'>Credits</h1>The background, profile picture and the graphic elements in the projects are the result of work by Julien Perrault. For all menu logos, credits are:";
        maj = "<hr>Last update: ";
    }
    else {
        if (langue != "fr" && langue != "fr-fr" && langue != "fr-FR" && window.location.href.indexOf("/#") == -1) {
            $.fancybox( choix_h1+'Do you speak french ?</div><div style="color:white;font-style:italic;text-align: center;">It seems that your browser is not in French.</div><div style="margin-top:10px;color:white;line-height:4em;margin-left:17%;height: 4em;"><div class="choix c-langues"><a href="#" onclick="parent.$.fancybox.close();">Yes</a></div><div style="float:left;margin:0 10px;">or</div><div class="choix c-langues"><a href="en/">No</a>');
        }
        $(".cv").fancybox({
            afterLoad   : function() {
                this.content = choix_h1+'Deux styles - deux CV</div><div style="margin-top:10px;color:white;line-height:4em;"><div class="choix c-cv"><a href="CV_Style.pdf" target="_new">Style</a></div><div style="float:left;margin:0 10px;">ou</div><div class="choix c-cv"><a href="CV_Classique.pdf" target="_new">Classique</a>';
                }
        });
        credit =  "<h1 style='margin-bottom:10px;'>Crédits</h1>Le fond, l'image de profil ainsi que les éléments graphiques présents dans les projets sont le fruit du travail de Julien Perrault. Pour l'ensemble des logos du menu, les crédits sont les suivants :";
        maj = "<hr>Dernière mise à jour : ";

    }
}

/* ---------------------------------------------------------------------- */
/*	Démarrage et modification de la résolution */
/* ---------------------------------------------------------------------- */

$(document).ready(function () {
    langues();
    if(window.location.href.indexOf("#contact") > -1) {
       
    }
    $('.youtube').fancybox({
        padding : 0
    });
});
$(window).resize(function() {
    if (init) {
    }
});
jQuery(document).ready(function () {

    /* ---------------------------------------------------------------------- */
	/*	Haut de page */
	/* ---------------------------------------------------------------------- */

	var $titre 	= $('#titre');

	$('.tab-experience,.tab-portfolio,.tab-contact').click(function () {
	  $titre.fadeIn('slow');
	});
	$('.tab-home').click(function () {
	  $titre.fadeOut('slow');
	});

    /* ---------------------------------------------------------------------- */
    /*	Menu */
    /* ---------------------------------------------------------------------- */

    $( "#content" ).tabs({
        activate: function( event, ui ) {
            var color = $('div[id="content"] ul .ui-tabs-active > a').css('background-color');
            $('meta[name=theme-color]').attr("content", color);
            $('meta[name=msapplication-navbutton-color]').attr("content", color);
        }
    });
    $("#image_a_montrer").fancybox({
        helpers : {
            title: {
                type: 'inside',
                position: 'top'
                }
        },
        padding : 0
    });
    $(".other a")
        .attr('rel', 'gallery')
        .fancybox({
            helpers : {
                title: {
                    type: 'inside'
                    }
            },
            padding : 0,
            beforeShow: function () {
                /* Disable right click */
                $.fancybox.wrap.bind("contextmenu", function (e) {
                        return false;
                });
            }
    });
    $(".info a")
        .attr('rel', 'gallery')
        .fancybox({
            helpers : {
                title: {
                    type: 'inside'
                    }
            },
            padding : 0,
            margin  : [20, 60, 20, 60],
            beforeShow: function () {
                /* Disable right click */
                $.fancybox.wrap.bind("contextmenu", function (e) {
                        return false;
                });
            }
    });

    $(".tab-home,.tab-experience,.tab-portfolio,.tab-contact").hover(function(){
       $(this).toggleClass('shadow_tab');
    });

    /* ---------------------------------------------------------------------- */
    /*	Compétences */
    /* ---------------------------------------------------------------------- */

    $('.tab-experience').one('click', function(e) {
        $(".timelineUnit").hide().each(function(index) {
            $(this).delay(300*index).show("slide", { direction: "right" }, 1500);
        });
	});

    jQuery('.skillbar').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.count-bar').animate({
                width:jQuery(this).attr('data-percent')
            },3000);
            var percent = jQuery(this).attr('data-percent');
            if (percent != "100%") {
                jQuery(this).find('.count').html('<span>' + percent + '</span>');
            }
        });
    });

	/* ---------------------------------------------------------------------- */
	/*	Portfolio */
	/* ---------------------------------------------------------------------- */

	var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');


	$filter.find('a').click(function (){
	  var selector = $(this).attr('data-filter');
		$container.isotope({
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});
	$filter.find('a').click(function () {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});

});
