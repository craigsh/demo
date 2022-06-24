import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'demo-welcome',
	template: `
		<mat-toolbar color="primary">
			<button mat-button routerLink="/">Forms demo</button>

			<div class="spacer"></div>

			<nav>
				<button mat-button routerLink="/template-driven" routerLinkActive="active-line">Template-driven</button>
				<button mat-button routerLink="/reactive" routerLinkActive="active-line">Reactive</button>
				<button mat-button routerLink="/formly" routerLinkActive="active-line">Formly</button>
				<button mat-button routerLink="/formly-productive" routerLinkActive="active-line">
					Formly Productive!
				</button>
			</nav>
		</mat-toolbar>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
			@import 'theme-variables';

			.spacer {
				flex: 1;
			}

			.active-line {
				color: $accent;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
