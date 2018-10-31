import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { I18nModule } from "./../i18n/i18n.module";
import { Pagination } from "./pagination.component";

export { PaginationModel } from "./pagination-model.class";
export { Pagination } from "./pagination.component";

@NgModule({
	declarations: [
		Pagination
	],
	exports: [
		Pagination
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule
	]
})
export class PaginationModule {}
