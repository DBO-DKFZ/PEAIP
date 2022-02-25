import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button } from 'react-native';


function DatenschutzScreen({ navigation }) {
  
  return (
    <ScrollView>
    <Text style={{fontSize: 15, textAlign: 'left', marginTop: 20, marginLeft: 20}}> 
    Verantwortlicher für die Datenverarbeitung ist: {"\n"}
Muster{"\n"}
Kaiserstraße 79{"\n"}
60329{"\n"}
Frankfurt{"\n"}
info@fuer-gruender.de{"\n"}
{"\n"}
Wir freuen uns über Ihr Interesse an unserem Online-Shop. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
{"\n"}{"\n"}
1. Zugriffsdaten und Hosting{"\n"}
Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert. (...)
{"\n"}{"\n"}
2. Datenerhebung und -verwendung zur Vertragsabwicklung{"\n"}
Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung oder bei einer Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) mitteilen. Pflichtfelder werden als solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Vertragsabwicklung, bzw. zur Bearbeitung Ihrer Kontaktaufnahme benötigen und Sie ohne deren Angabe die Bestellung nicht abschließen, bzw. die Kontaktaufnahme nicht versenden können. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von ihnen mitgeteilten Daten gemäß Art. 6 Abs. 1 (...)
{"\n"}{"\n"}
3. Datenweitergabe{"\n"}
Zur Vertragserfüllung gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO geben wir Ihre Daten an das mit der Lieferung beauftragte Versandunternehmen weiter, soweit dies zur Lieferung bestellter Waren erforderlich ist. Je nach dem, welchen Zahlungsdienstleister Sie im Bestellprozess auswählen, geben wir zur Abwicklung von Zahlungen die hierfür erhobenen Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut und ggf. von uns beauftragte Zahlungsdienstleister weiter  (...)
{"\n"}{"\n"}
4. E-Mail-Newsletter{"\n"}
E-Mail-Werbung mit Anmeldung zum Newsletter
{"\n"}
Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierfür erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelmäßig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO zuzusenden.
{"\n"}
Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch eine Nachricht an die unten beschriebene Kontaktmöglichkeit oder über einen dafür vorgesehenen Link im Newsletter erfolgen. (...)
{"\n"}{"\n"}
5. Cookies und Webanalyse{"\n"}
Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, um passende Produkte anzuzeigen oder zur Marktforschung verwenden wir auf verschiedenen Seiten sogenannte Cookies. Dies dient der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimierten Darstellung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO. Cookies sind kleine Textdateien, die automatisch auf Ihrem Endgerät gespeichert werden. Einige der von uns verwendeten Cookies werden nach Ende der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben  (...)
{"\n"}{"\n"}
Einsatz von Google (Universal) Analytics zur Webanalyse
Soweit Sie hierzu Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO erteilt haben, setzt diese Website zum Zweck der Webseitenanalyse Google (Universal) Analytics ein, einen Webanalysedienst der Google LLC (www.google.de). Google (Universal) Analytics verwendet Methoden, die eine Analyse der Benutzung der Website durch Sie ermöglichen, wie zum Beispiel Cookies. Die automatisch erhobenen Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen (...)
{"\n"}{"\n"}
6. Online-Marketing{"\n"}
Google AdSense
Unsere Website vermarktet über Google AdSense Platz für Anzeigen von Drittanbietern und Werbenetzwerken. Diese Anzeigen werden Ihnen an verschiedenen Stellen auf dieser Website angezeigt. Soweit Sie uns hierzu Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO erteilt haben, wird im Rahmen der Einbindung von Google AdSense das sog. DoubleClick-Cookie von Google gesetzt.
Dieses ermöglicht die Anzeige interessengerechter Werbung durch automatische Zuordnung einer pseudonymen UserID, mit deren Hilfe die Interessen anhand von Besuchen dieser (...)
{"\n"}{"\n"}
7. Social Media PlugIns{"\n"}
Verwendung von Social Plugins von Facebook, Twitter, Instagram
Auf unserer Website werden sogenannte Social Plugins („Plugins“) von sozialen Netzwerken verwendet.
Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Facebook, Google, Twitter oder Instagram her. Der Inhalt des Plugins wird vom jeweiligen Anbieter direkt an Ihren Browser übermittelt und in die Seite eingebunden. Durch die Einbindung der Plugins erhalten die Anbieter die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein Profil besitzen oder gerade nicht eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server des jeweiligen Anbieters (...)
{"\n"}
Unsere Onlinepräsenz auf Facebook, Twitter, Instagram{"\n"}
Unsere Präsenz auf sozialen Netzwerken und Plattformen dient einer besseren, aktiven Kommunikation mit unseren Kunden und Interessenten. Wir informieren dort über unsere Produkte und laufende Sonderaktionen.
Bei dem Besuch unserer Onlinepräsenzen in sozialen Medien können Ihre Daten für Marktforschungs- und Werbezwecke  (...)
{"\n"}{"\n"}
8. Kontaktmöglichkeiten und Ihre Rechte{"\n"}
Als Betroffener haben Sie folgende Rechte:
{"\n"}
gemäß Art. 15 DSGVO das Recht, in dem dort bezeichneten Umfang Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;{"\n"}
gemäß Art. 16 DSGVO das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;{"\n"}
gemäß Art. 17 DSGVO das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die weitere Verarbeitung{"\n"}
- zur Ausübung des Rechts auf freie Meinungsäußerung und Information;{"\n"}
- zur Erfüllung einer rechtlichen (...){"\n"}
{"\n"}{"\n"}
Einwilligungen oder Widerspruch gegen eine bestimmte Datenverwendung wenden Sie sich bitte direkt an uns über die Kontaktdaten in unserem Impressum.
{"\n"}{"\n"}
Datenschutzbeauftragter:{"\n"}
Max Mustermann{"\n"}
Musterstraße 2{"\n"}
12345 Musterstadt{"\n"}
{"\n"}
max@mustermann.de
  {"\n"}{"\n"}  
    
     </Text>
     </ScrollView>
    )}
 
export default DatenschutzScreen;