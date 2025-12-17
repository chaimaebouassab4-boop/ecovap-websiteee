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
              <div onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        <Input type="tel" placeholder="0657-387660" {...field} data-testid="input-telephone" />
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
                  onClick={form.handleSubmit(onSubmit)} 
                  className="w-full" 
                  size="lg" 
                  data-testid="button-submit-contact"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </div>
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
                    <a href="mailto:Eco.vap.tng.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-email">
                    Eco.vap.tng.info@gmail.com

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
                    <p className="text-muted-foreground">Lun - Ven: 8h00 - 22h00</p>
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