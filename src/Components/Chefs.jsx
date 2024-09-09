export default function Component() {
	return (
		<section className="py-12 md:py-24">
			<div className="container grid gap-8 px-4 md:px-6">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						Meet Our Talented Chefs
					</h2>
					<p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our team of culinary experts bring years of experience and a passion
						for creating exceptional dishes.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<div className="rounded-lg bg-card p-6 shadow-lg">
						<div className="relative h-48 overflow-hidden rounded-lg">
							<img
								src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg&fm=jpg"
								alt="Chef John Doe"
								width={400}
								height={400}
								className="h-full w-full object-cover object-center"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
						<div className="mt-4 space-y-2">
							<h3 className="text-xl font-bold">John Doe</h3>
							<p className="text-muted-foreground">Head Chef</p>
							<p className="text-sm leading-relaxed">
								John Doe is our Head Chef, bringing over 15 years of experience
								in the culinary industry. He is known for his innovative
								approach to classic dishes, blending traditional techniques with
								modern flavors.
							</p>
							<div className="mt-4 space-y-2">
								<h4 className="text-base font-semibold">Signature Dishes:</h4>
								<ul className="space-y-1 text-sm">
									<li>Seared Scallops with Cauliflower Puree</li>
									<li>Herb-Crusted Rack of Lamb</li>
									<li>Chocolate Lava Cake with Raspberry Coulis</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-card p-6 shadow-lg">
						<div className="relative h-48 overflow-hidden rounded-lg">
							<img
								src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg"
								alt="Chef Jane Smith"
								width={400}
								height={400}
								className="h-full w-full object-cover object-center"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
						<div className="mt-4 space-y-2">
							<h3 className="text-xl font-bold">Jane Smith</h3>
							<p className="text-muted-foreground">Pastry Chef</p>
							<p className="text-sm leading-relaxed">
								Jane Smith is our talented Pastry Chef, known for her delicate
								touch and innovative dessert creations. With a background in
								French patisserie, she brings a unique flair to our menu.
							</p>
							<div className="mt-4 space-y-2">
								<h4 className="text-base font-semibold">Signature Dishes:</h4>
								<ul className="space-y-1 text-sm">
									<li>Crème Brûlée with Vanilla Bean</li>
									<li>Raspberry Macarons</li>
									<li>Salted Caramel Tart</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-card p-6 shadow-lg">
						<div className="relative h-48 overflow-hidden rounded-lg">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/640px-Gordon_Ramsay.jpg"
								alt="Chef Michael Johnson"
								width={400}
								height={400}
								className="h-full w-full object-cover object-center"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
						<div className="mt-4 space-y-2">
							<h3 className="text-xl font-bold">Michael Johnson</h3>
							<p className="text-muted-foreground">Sous Chef</p>
							<p className="text-sm leading-relaxed">
								Michael Johnson is our talented Sous Chef, bringing a wealth of
								experience and a keen eye for detail to our kitchen. He is known
								for his mastery of classic cooking techniques and his ability to
								elevate simple ingredients.
							</p>
							<div className="mt-4 space-y-2">
								<h4 className="text-base font-semibold">Signature Dishes:</h4>
								<ul className="space-y-1 text-sm">
									<li>Roasted Beet Salad with Goat Cheese</li>
									<li>Braised Short Ribs with Mashed Potatoes</li>
									<li>Grilled Salmon with Lemon Butter Sauce</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-card p-6 shadow-lg">
						<div className="relative h-48 overflow-hidden rounded-lg">
							<img
								src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208319.jpg"
								alt="Chef Emily Davis"
								width={400}
								height={400}
								className="h-full w-full object-cover object-center"
								style={{ aspectRatio: "400/400", objectFit: "cover" }}
							/>
						</div>
						<div className="mt-4 space-y-2">
							<h3 className="text-xl font-bold">Emily Davis</h3>
							<p className="text-muted-foreground">Saucier</p>
							<p className="text-sm leading-relaxed">
								Emily Davis is our talented Saucier, known for her mastery of
								sauces and her ability to elevate even the simplest of dishes.
								With a background in French cuisine, she brings a refined touch
								to our menu.
							</p>
							<div className="mt-4 space-y-2">
								<h4 className="text-base font-semibold">Signature Dishes:</h4>
								<ul className="space-y-1 text-sm">
									<li>Beef Bourguignon with Buttered Noodles</li>
									<li>Chicken Cordon Bleu with Béchamel Sauce</li>
									<li>Mushroom Risotto with Truffle Oil</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
