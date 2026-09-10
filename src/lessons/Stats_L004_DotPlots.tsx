import { useReveal } from '../AppContext';
import { KeyWord, Section, Split } from '../LessonComponent';

export function Stats_L004_DotPlots() {
	return (
		<div style={Styles.Lesson}>
			<h1>1.4 Quantitative Data: Dot Plots</h1>

			<p>
				A <KeyWord content="dot plot" /> displays each quantitative value as
				a dot above a number line. When values repeat, stack the dots to show
				how often each value occurs.
			</p>

			<Section>
				<h2>Build a Dot Plot</h2>
				<p>
					These data show how many minutes nine students spent reading last
					night:
				</p>
				<p style={Styles.ExampleBox}>
					1, 2, 2, 3, 3, 3, 4, 5, 5
				</p>

				<ol>
					<li>Draw a number line that includes every value.</li>
					<li>Use equal spacing for the scale.</li>
					<li>Place one dot above each data value.</li>
					<li>Stack dots when a value appears more than once.</li>
				</ol>

				<DotPlot
					title="Minutes spent reading"
					values={[1, 2, 2, 3, 3, 3, 4, 5, 5]}
					description="A dot plot of reading times. Three is the tallest stack, with three dots."
				/>

				<p>
					The tallest stack is the <KeyWord content="mode" />, the value that
					occurs most often. Here, the mode is 3 minutes.
				</p>
			</Section>

			<Section>
				<h2>Center and Variability</h2>
				<p>
					The <KeyWord content="median" /> is the middle value when the data
					are ordered. The <KeyWord content="range" /> is the greatest value
					minus the least value.
				</p>

				<DotPlot
					title="Number of pages read"
					values={[2, 3, 3, 4, 4, 4, 5, 6, 7]}
					description="A dot plot of pages read. The center is 4 and the range is 5."
				/>

				<ol>
					<li>
						<Split
							leftWeight={2}
							left={<>How many students read 4 pages?</>}
							right={<KeyWord content="3 students" minLength={12} align="right" />}
						/>
					</li>
					<li>
						<Split
							leftWeight={2}
							left={<>What is the median number of pages?</>}
							right={<KeyWord content="4 pages" minLength={12} align="right" />}
						/>
					</li>
					<li>
						<Split
							leftWeight={2}
							left={<>What is the range of pages?</>}
							right={<KeyWord content="5 pages" minLength={12} align="right" />}
						/>
					</li>
				</ol>
			</Section>

			<Section>
				<h2>Describe Shape and Outliers</h2>
				<p>
					Look at the overall pattern. A distribution can be roughly{' '}
					<KeyWord content="symmetric" />, <KeyWord content="skewed left" />,
					or <KeyWord content="skewed right" />. A value that sits far from
					the rest of the data may be an <KeyWord content="outlier" />.
				</p>

				<DotPlot
					title="Daily screen time in hours"
					values={[2, 3, 3, 4, 4, 5, 5, 6, 12]}
					description="A dot plot of screen time. Most values are between 2 and 6, with an isolated value at 12."
				/>

				<ol start={4}>
					<li>
						<Split
							leftWeight={2}
							left={<>Which value appears to be an outlier?</>}
							right={<KeyWord content="12 hours" minLength={12} align="right" />}
						/>
					</li>
					<li>
						<Split
							leftWeight={2}
							left={<>Which direction is the distribution skewed?</>}
							right={<KeyWord content="skewed right" minLength={12} align="right" />}
						/>
					</li>
				</ol>

				<h3>Free Response</h3>
				<p>
					In one or two sentences, describe the screen-time distribution. Use
					its center, spread, shape, or unusual value in your response.
				</p>
				<div style={Styles.ResponseSpace} aria-label="Space for a free-response answer" />
			</Section>
		</div>
	);
}

function DotPlot({
	title,
	values,
	description,
}: {
	title: string;
	values: number[];
	description: string;
}) {
	const { reveal } = useReveal();
	const minimum = Math.min(...values);
	const maximum = Math.max(...values);
	const counts = new Map<number, number>();

	values.forEach((value) => {
		counts.set(value, (counts.get(value) ?? 0) + 1);
	});

	return (
		<figure style={Styles.Figure}>
			<figcaption><strong>{title}</strong></figcaption>
			<div
				className="lesson-dot-plot"
				style={Styles.DotPlot}
				aria-label={description}
			>
				<div style={Styles.DotColumns}>
					{Array.from({ length: maximum - minimum + 1 }, (_, index) => {
						const value = minimum + index;
						const count = counts.get(value) ?? 0;

						return (
							<div style={Styles.DotColumn} key={value}>
								<div style={Styles.DotStack}>
									{Array.from({ length: count }, (_, dotIndex) => (
										<span
											className="lesson-dot"
											key={`${value}-${dotIndex}`}
											style={{ ...Styles.Dot, opacity: reveal ? 1 : 0.85 }}
											aria-hidden="true"
										/>
									))}
								</div>
								<span style={Styles.AxisTick}>{value}</span>
							</div>
						);
					})}
				</div>
				<span style={Styles.AxisLabel}>Value</span>
			</div>
		</figure>
	);
}

const Styles = {
	Lesson: {
		font: '16px Comic Sans MS, Cursive, sans-serif',
	} satisfies React.CSSProperties,

	ExampleBox: {
		border: '1px solid var(--border-color)',
		borderLeft: '4px solid var(--primary-color)',
		padding: '1rem',
		margin: '1rem 0',
		backgroundColor: 'var(--code-bg)',
	} satisfies React.CSSProperties,

	Figure: {
		margin: '1.5rem auto',
		maxWidth: '700px',
	} satisfies React.CSSProperties,

	DotPlot: {
		overflowX: 'auto',
		padding: '1rem 0.5rem 0',
		borderLeft: '1px solid var(--border-color)',
		borderBottom: '1px solid var(--border-color)',
	} satisfies React.CSSProperties,

	DotColumns: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		minWidth: '320px',
	} satisfies React.CSSProperties,

	DotColumn: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		minWidth: '2.5rem',
		minHeight: '8rem',
		borderRight: '1px dotted var(--border-color)',
	} satisfies React.CSSProperties,

	DotStack: {
		display: 'flex',
		flexDirection: 'column-reverse',
		gap: '0.25rem',
		justifyContent: 'flex-start',
		minHeight: '6rem',
	} satisfies React.CSSProperties,

	Dot: {
		display: 'block',
		width: '1.25rem',
		height: '1.25rem',
		borderRadius: '50%',
		backgroundColor: 'var(--accent-color)',
		border: '2px solid var(--primary-dark)',
	} satisfies React.CSSProperties,

	AxisTick: {
		width: '100%',
		padding: '0.5rem 0.25rem 0',
		textAlign: 'center',
		borderTop: '1px solid var(--text-primary)',
	} satisfies React.CSSProperties,

	AxisLabel: {
		display: 'block',
		marginTop: '0.5rem',
		textAlign: 'center',
		color: 'var(--text-secondary)',
	} satisfies React.CSSProperties,

	ResponseSpace: {
		minHeight: '5rem',
		marginTop: '1rem',
		borderBottom: '1px solid var(--text-muted)',
	} satisfies React.CSSProperties,
};