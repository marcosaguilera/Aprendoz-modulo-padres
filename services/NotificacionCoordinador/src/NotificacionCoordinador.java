import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Message.*;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.text.SimpleDateFormat;
import java.lang.String;
import java.util.*;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import java.net.*; //clase para las URL

@ExposeToClient
public class NotificacionCoordinador extends JavaServiceSuperClass {

   public String sendEmailNotification(String correocoordinador, String correopadre, String correomadre, String tramite, String std, String fechahora, String comentario){ 
      try{        
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.starttls.enable", "true");
            props.setProperty("mail.smtp.port", "587");
            props.setProperty("mail.smtp.user", "eventualidades@rochester.edu.co");
            props.setProperty("mail.smtp.auth", "true");

            Session session = Session.getDefaultInstance(props);

            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("eventualidades@rochester.edu.co"));       
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correocoordinador));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correopadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correomadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("eventualidades@rochester.edu.co"));                

             message.setSubject("*** PRUEBA - NOTIFICACIONES TRAMITES ***");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/images/logo.png\">"+"<br/><br/>"+
              "***Este un mensaje automático del sistema APRENDOZ***<br/><br/>"+
              "Se ha realizado una solicitud de Tramite con la siguiente información:<br/>"+
              "<ul>"+
                  "<li>Estudiante: "+std+"</li>"+
                  "<li>Fecha y hora: "+fechahora+"</li>"+
                  "<li>Tramite: "+tramite+"</li>"+
                  "<li>Comentario: "+comentario+"</li>"+
              "</ul>"+"<br/>"+
              "Agradecemos su atención,<br/><br/>"+
              "***Este un mensaje automático del sistema APRENDOZ***<br/><br/>"+               
              "Aprendoz Colegio Rochester","ISO-8859-1","html");          

            Transport t = session.getTransport("smtp");
            t.connect("eventualidades@rochester.edu.co", "Rochester1959+");
            t.sendMessage(message, message.getAllRecipients());
            t.close();
            
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return "ok";
     } 

}
