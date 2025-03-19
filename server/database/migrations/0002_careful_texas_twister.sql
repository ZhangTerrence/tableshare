ALTER TABLE `schemas` ADD `name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `schemas` ADD `description` text DEFAULT '';--> statement-breakpoint
ALTER TABLE `schemas` ADD `private` integer NOT NULL;