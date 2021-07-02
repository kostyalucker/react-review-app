import { RANDOM_STRING_LENGTH } from './constants';

export function makeRandomString(): string {
	let result = [];

	for (let i = 0; i < RANDOM_STRING_LENGTH; i++) {
		result.push(
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
				Math.floor(
					Math.random() *
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
							.length
				)
			)
		);
	}

	let string = result.join("");

	return string;
}
