import type { Config } from "tailwindcss";

export default {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						fontSize: '1.125rem', // 18px base font size
						lineHeight: '1.7',
						p: {
							fontSize: '1.125rem',
							lineHeight: '1.7',
							marginTop: '1.25em',
							marginBottom: '1.25em',
						},
						li: {
							fontSize: '1.125rem',
							lineHeight: '1.7',
						},
						a: {
							textUnderlineOffset: "2px",
							"&:hover": {
								"@media (hover: hover)": {
									textDecorationColor: "var(--color-link)",
									textDecorationThickness: "2px",
								},
							},
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						kbd: {
							"&:where([data-theme='dark'], [data-theme='dark'] *)": {
								background: "var(--color-global-text)",
							},
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							marginInlineStart: "calc(var(--spacing) * 0.5)",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@media (hover: hover)": {
										color: "var(--color-link)",
									},
								},
							},
						},
						/* Table */
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
						'th[align="center"], td[align="center"]': {
							"text-align": "center",
						},
						'th[align="right"], td[align="right"]': {
							"text-align": "right",
						},
						'th[align="left"], td[align="left"]': {
							"text-align": "left",
						},
						".expressive-code, .admonition, .github-card": {
							marginTop: "calc(var(--spacing)*4)",
							marginBottom: "calc(var(--spacing)*4)",
						},
					},
				},
				sm: {
					css: {
						fontSize: '1rem', // 16px for sm variant
						lineHeight: '1.6',
						p: {
							fontSize: '1rem',
							lineHeight: '1.6',
						},
						li: {
							fontSize: '1rem',
							lineHeight: '1.6',
						},
						code: {
							fontSize: "var(--text-sm)",
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;
