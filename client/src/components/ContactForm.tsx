import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';


const { toast } = useToast();

const onSubmit = async (values: { nom: any; email: any; telephone: any; message: any; }) => {
  try {
    const serviceId = 'service_15esure';
    const templateId = 'VOTRE_TEMPLATE_ID';
    const publicKey = 'VOTRE_PUBLIC_KEY';

    // On prépare les paramètres pour le template EmailJS
    const templateParams = {
      nom_complet: values.nom,        // correspond à {{nom_complet}} dans votre template
      email_client: values.email,     // correspond à {{email_client}}
      telephone_client: values.telephone, // correspond à {{telephone_client}}
      message: values.message,         // correspond à {{message}}
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    toast({
      title: "Succès !",
      description: "Votre message a été envoyé à EcoVap.",
    });

    form.reset(); // Vide le formulaire après l'envoi
  } catch (error) {
    console.error("Erreur EmailJS:", error);
    toast({
      variant: "destructive",
      title: "Erreur",
      description: "Impossible d'envoyer le message. Veuillez essayer WhatsApp.",
    });
  }
};



const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer un email valide"),
  telephone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="relative">
      {/* Logo flottant animé */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-20">
        <div className="relative flex items-center justify-center">

          {/* Halo lumineux élégant */}
          <div
            className="
              absolute
              w-56 h-56
              rounded-full
              bg-gradient-to-br from-[#2ecc71]/40 to-[#3498db]/40
              blur-3xl
              opacity-70
              animate-softPulse
            "
          ></div>

          {/* Cercle support (optionnel mais très pro) */}
          <div
            className="
              absolute
              w-44 h-44
              rounded-full
              bg-white/80
              backdrop-blur-md
              shadow-xl
            "
          ></div>

          {/* Logo */}
          <img
            src="/attached_assets/EcoVapLoGo.png"
            alt="EcoVap Logo"
            className="
              relative
              w-32 h-32
              object-contain
              drop-shadow-2xl
              animate-fadeInScale
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-16">
        <Card 
          data-testid="card-contact-form"
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } hover:shadow-2xl hover:scale-[1.02] transition-all`}
        >
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Send className="w-6 h-6 text-primary animate-pulse" />
              Envoyez-nous un message
            </CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} data-testid="input-nom" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input type="tel" placeholder="0657-387660" {...field} data-testid="input-telephone" />
                          <a
                            href="https://wa.me/212657387660"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:bg-[#128C7E] rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                            title="Contactez-nous sur WhatsApp"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-6 h-6"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </a>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez votre besoin..."
                          className="min-h-32 resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

             <Button 
  type="submit"
  className="w-full" 
  size="lg" 
  disabled={form.formState.isSubmitting} // Désactive le bouton pendant l'envoi
  data-testid="button-submit-contact"
>
  {form.formState.isSubmitting ? (
    "Envoi en cours..."
  ) : (
    <>
      <Send className="w-4 h-4 mr-2" />
      Envoyer le message
    </>
  )}
</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <Card 
            data-testid="card-contact-info"
            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
                Informations de contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a href="tel:+212657387660" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-phone">
                      +212 657 38 76 60
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Mail className="w-5 h-5 text-primary group-hover:animate-pulse" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:eco.cleaners.tng.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-email">
eco.cleaners.tng.info@gmail.com             
       </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <MapPin className="w-5 h-5 text-primary group-hover:animate-pulse" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Tanger, Maroc</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Clock className="w-5 h-5 text-primary group-hover:animate-pulse" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horaires</p>
                    <p className="text-muted-foreground">Lun - Ven: 9h00 - 22h00</p>
                    <p className="text-muted-foreground">Sam - Dim: 8h00 - 22h00</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            data-testid="card-map"
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-0 overflow-hidden rounded-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102345.67890123456!2d-5.8887578!3d35.6309548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46a552066b5af4c3%3A0x74bfe4f2577ea610!2sECOVAP%20TANGER%20SARL!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation EcoVap à Tanger"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
