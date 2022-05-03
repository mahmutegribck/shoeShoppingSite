// JavaScript Document

$(document).ready(function(){
	/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ >>>>> */
	$("#HeaderMenuAcmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
	/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ <<<<< */
	
	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI >>>>> */
	var DokumanGenisligi		=	$(window).outerWidth();
	
	if(!$("#HeaderMesajAlani").length){
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	108;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	98;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	88;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	78;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	78;
	   }
	}else{
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	148;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	138;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	118;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	108;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	103;
	   }
	}
	$("main").css("top", OsfetDegeri);
	$("footer").css("top", OsfetDegeri);
	
	$(window).resize(function(){
		var DokumanGenisligi		=	$(window).outerWidth();

		if(!$("#HeaderMesajAlani").length){
		   if(DokumanGenisligi>=1200){ /* XL */
			  var OsfetDegeri		=	108;
		   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
			  var OsfetDegeri		=	98;
		   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
			  var OsfetDegeri		=	88;
		   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
			  var OsfetDegeri		=	78;
		   }else if(DokumanGenisligi<=574){ /* XL */
			  var OsfetDegeri		=	78;
		   }
		}else{
		   if(DokumanGenisligi>=1200){ /* XL */
			  var OsfetDegeri		=	148;
		   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
			  var OsfetDegeri		=	138;
		   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
			  var OsfetDegeri		=	118;
		   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
			  var OsfetDegeri		=	108;
		   }else if(DokumanGenisligi<=574){ /* XL */
			  var OsfetDegeri		=	103;
		   }
		}
		$("main").css("top", OsfetDegeri);
		$("footer").css("top", OsfetDegeri);
	});
	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI <<<<< */

	/* SSS İÇERİK GÖSTER / GİZLE >>>> */
	$.SSSIceriginiGoster	=	function(ElemanID){
		var	SoruIDsi			=	ElemanID;
		var	IslenecekAlan		=	"#" + SoruIDsi;
		
		$(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideUp();
		$(IslenecekAlan).parent().find(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideToggle();
	}
	/* SSS İÇERİK GÖSTER / GİZLE <<<<< */
	
	/* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GONDER İŞLEMİ >>>>> */
	$.AlisverisSepetiFormGonder	=	function(){
		$("form").submit();
	}
	/* ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GONDER İŞLEMİ <<<<< */
	
	/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA / KAPATMA İŞLEMİ >>>>> */
	$.AlisverisSepetiOdemeSayfasiIcinKrediKartiSistemiSecildi		=	function(){
		$("#KrediKartiIleOdemeAlani").css("display", "block");
		$("#MobilOdemeIleOdemeAlani").css("display", "none");
		$("#BankaHavalesiIleOdemeAlani").css("display", "none");
	}
	
	$.AlisverisSepetiOdemeSayfasiIcinMobilOdemeSistemiSecildi		=	function(){
		$("#KrediKartiIleOdemeAlani").css("display", "none");
		$("#MobilOdemeIleOdemeAlani").css("display", "block");
		$("#BankaHavalesiIleOdemeAlani").css("display", "none");
	}
	
	$.AlisverisSepetiOdemeSayfasiIcinBankaHavalesiSistemiSecildi	=	function(){
		$("#KrediKartiIleOdemeAlani").css("display", "none");
		$("#MobilOdemeIleOdemeAlani").css("display", "none");
		$("#BankaHavalesiIleOdemeAlani").css("display", "block");
	}
	/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ ALANLARI AÇMA / KAPATMA İŞLEMİ <<<<< */
	
	/* ÜRÜN DETAY SAYFASI RESİM DEĞİŞTİRME İŞLEMİ >>>>> */
	$.UrunDetaySayfasiIcinResimDegistir		=	function(ResimDegeri){
		var DegisecekResimDosyasiYolu	=	"Resimler/UrunResimleri/Erkek/";
		var	ResimOlustur				=	DegisecekResimDosyasiYolu + ResimDegeri;
	
		$("#BuyukResim").attr("src", ResimOlustur);
	}
	/* ÜRÜN DETAY SAYFASI RESİM DEĞİŞTİRME İŞLEMİ <<<<< */
	
	/* SLAYT ALANI >>>>> */
	$(function(){
		var SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
		var SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
		var	SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
		var	SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
		var	ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
		var	ResimSirasi						=	0;
		var	KayacakAlan						=	0;
		
		SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);

			$(window).resize(function(){
				SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
				SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
				SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
				SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
				ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
				
				SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
		});

		$.OtomatikDegistir			=	function(){
			if(ResimSirasi < SlaytListesiUzunlugu - 1){
			   ResimSirasi++;
			   KayacakAlan			=	"-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px";
			}else{
				ResimSirasi			=	0;
				KayacakAlan			=	0;
			}
			
			SlaytListeOlusturmaElementi.stop().animate({
				marginLeft:KayacakAlan
			}, 500, function(){
				SlaytElementi					=	$(".SlaytAlaniKapsayicisi");
				SlaytListeOlusturmaElementi		=	SlaytElementi.find(".SlaytAlaniResimleri");
				SlaytListesiUzunlugu			=	SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
				SlaytIcinDokumanGenisligi		=	SlaytElementi.outerWidth();
				ToplamGenislik					=	SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
				
				SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
			});
		}
		
		var	SlaytOynat		=	setInterval("$.OtomatikDegistir()", 2000);
	});
	/* SLAYT ALANI <<<<< */
});