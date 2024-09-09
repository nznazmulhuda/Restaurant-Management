import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "./ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";

export default function Component() {
	return (
		<div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
			<div className="grid gap-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight">
						Event & Catering Booking
					</h1>
					<p className="text-muted-foreground">
						Book your next private party, corporate event, or catering service
						with us.
					</p>
				</div>
				<Card className="py-10 bg-[#ffffffc3]">
					<CardContent>
						<form className="grid gap-6">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="event-type">Event Type</Label>
									<Select id="event-type">
										<SelectTrigger>
											<SelectValue placeholder="Select event type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="private-party">
												Private Party
											</SelectItem>
											<SelectItem value="corporate-event">
												Corporate Event
											</SelectItem>
											<SelectItem value="catering">Catering</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="event-date">Event Date</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className="w-full justify-start text-left font-normal"
											>
												<CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
												Pick a date
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar mode="single" initialFocus />
										</PopoverContent>
									</Popover>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="event-time">Event Time</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className="w-full justify-start text-left font-normal"
											>
												<ClockIcon className="mr-1 h-4 w-4 -translate-x-1" />
												Select time
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<div />
										</PopoverContent>
									</Popover>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="event-guests">Number of Guests</Label>
									<Input
										id="event-guests"
										type="number"
										placeholder="Enter number of guests"
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="event-details">Event Details</Label>
								<Textarea
									id="event-details"
									rows={4}
									placeholder="Provide details about your event..."
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="menu-options">Menu Options</Label>
								<Accordion type="single" collapsible>
									<AccordionItem value="custom-menu">
										<AccordionTrigger className="text-base">
											Custom Menu
										</AccordionTrigger>
										<AccordionContent>
											<div className="grid gap-4">
												<div className="grid gap-2">
													<Label htmlFor="custom-appetizers">Appetizers</Label>
													<Textarea
														id="custom-appetizers"
														rows={2}
														placeholder="Enter custom appetizers..."
													/>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="custom-entrees">Entrees</Label>
													<Textarea
														id="custom-entrees"
														rows={2}
														placeholder="Enter custom entrees..."
													/>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="custom-desserts">Desserts</Label>
													<Textarea
														id="custom-desserts"
														rows={2}
														placeholder="Enter custom desserts..."
													/>
												</div>
											</div>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="catering-packages">
										<AccordionTrigger className="text-base">
											Catering Packages
										</AccordionTrigger>
										<AccordionContent>
											<div className="grid gap-4">
												<div className="grid gap-2">
													<Label htmlFor="package-1">Package 1</Label>
													<div className="flex items-center gap-2">
														<Checkbox id="package-1" />
														<span>Appetizers, 3 Entrees, 2 Sides, Dessert</span>
													</div>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="package-2">Package 2</Label>
													<div className="flex items-center gap-2">
														<Checkbox id="package-2" />
														<span>Appetizers, 4 Entrees, 3 Sides, Dessert</span>
													</div>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="package-3">Package 3</Label>
													<div className="flex items-center gap-2">
														<Checkbox id="package-3" />
														<span>Appetizers, 5 Entrees, 4 Sides, Dessert</span>
													</div>
												</div>
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							<div className="flex justify-end">
								<Button type="submit">Book Event</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

function CalendarDaysIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
			<path d="M8 14h.01" />
			<path d="M12 14h.01" />
			<path d="M16 14h.01" />
			<path d="M8 18h.01" />
			<path d="M12 18h.01" />
			<path d="M16 18h.01" />
		</svg>
	);
}

function ClockIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}
