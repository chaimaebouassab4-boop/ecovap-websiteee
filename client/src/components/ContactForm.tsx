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

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer un email valide"),
  telephone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <Card data-testid="card-contact-form">
        <CardHeader>
          <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
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
                      <Input type="tel" placeholder="+212 6 00 00 00 00" {...field} data-testid="input-telephone" />
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

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card data-testid="card-contact-info">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Informations de contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a href="tel:+212600000000" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-phone">
                    +212 6 00 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:contact@bionvap.ma" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-email">
                    contact@bionvap.ma
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-muted-foreground">Tanger, Maroc</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Horaires</p>
                  <p className="text-muted-foreground">Lun - Ven: 8h00 - 18h00</p>
                  <p className="text-muted-foreground">Sam: 9h00 - 14h00</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card data-testid="card-map">
          <CardContent className="p-0 overflow-hidden rounded-lg">
            <div className="aspect-video bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103363.62117082373!2d-5.897789!3d35.7595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1701000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation BioNVap à Tanger"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
