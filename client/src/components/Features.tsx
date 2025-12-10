import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Clock, Target, Award, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
	{
		icon: Wrench,
		title: "Sans Démontage",
		description:
			"Nettoyage sur place sans démonter ni déplacer vos équipements. Intervention rapide et efficace.",
	},
	{
		icon: Clock,
		title: "Rapide",
		description:
			"Espaces utilisables immédiatement après nettoyage. Seulement 40 minutes pour les textiles.",
	},
	{
		icon: Target,
		title: "Efficace",
		description:
			"Élimine 100% des bactéries, acariens, parasites, même le COVID-19. Résultats garantis.",
	},
	{
		icon: Award,
		title: "Conforme AFNOR",
		description:
			"Technologie vapeur sèche respectant la norme AFNOR pour milieux médicaux, collectifs et alimentaires (HACCP).",
	},
];

export default function Features() {
	const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

	return (
		<section
			className="py-16 lg:py-24 bg-muted/30"
			aria-labelledby="features-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2
						id="features-heading"
						className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
					>
						Pourquoi Choisir EcoVap ?
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Une technologie innovante de nettoyage à la vapeur sèche qui garantit
						hygiène, sécurité et qualité premium.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							onClick={() => setSelectedFeature(index)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							className="cursor-pointer"
						>
							<Card
								className="hover-elevate transition-all duration-300 h-full"
								data-testid={`card-feature-${index}`}
							>
								<CardContent className="p-6 text-center">
									<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
										<feature.icon
											className="w-7 h-7 text-primary"
											aria-hidden="true"
										/>
									</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{feature.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			{/* Modal Overlay */}
			<AnimatePresence>
				{selectedFeature !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedFeature(null)}
						className="fixed inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80 flex items-center justify-center p-4 z-50"
					>
						<motion.div
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.5, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							onClick={(e) => e.stopPropagation()}
							className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
						>
							<button
								onClick={() => setSelectedFeature(null)}
								className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
							>
								<X className="w-6 h-6 text-gray-600" />
							</button>

							<div className="text-center">
								<div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-blue-100 mb-6">
									{selectedFeature !== null && (
										<>
											{(() => {
												const SelectedIcon = features[selectedFeature].icon;
												return (
													<SelectedIcon
														className="w-10 h-10 text-blue-600"
														aria-hidden="true"
													/>
												);
											})()}
										</>
									)}
								</div>
								<h2 className="text-4xl font-bold text-gray-900 mb-4">
									{features[selectedFeature]?.title}
								</h2>
								<p className="text-xl text-gray-600 leading-relaxed">
									{features[selectedFeature]?.description}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
