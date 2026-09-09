import { useReveal } from '../AppContext';
import { KeyWord, Section, Split } from '../LessonComponent';
import pictogram from '../assets/stats_l003_pictogram.jpg';

export function Stats_L003_CatExtra() {
  const { reveal } = useReveal();

  return (
    <div style={Styles.Lesson}>
      <h1>1.3 Reading Categorical Data</h1>

      <p>
        This lesson extends frequency tables, bar charts, and pie charts. It
        focuses on describing who or what was counted and on reading graphs
        carefully.
      </p>

      <Section>
        <h2>Individuals and Entries</h2>
        <p>
          An <KeyWord content="individual" /> is a person, object, or case
          described by the data. An <KeyWord content="entry" /> is one recorded
          response or value for an individual.
        </p>
        <p style={Styles.ExampleBox}>
          If 20 students answer a survey, the students are the individuals and
          the 20 recorded responses are the entries.
        </p>
        <Split
          left={<>In a survey of favorite fruit, what is an individual?</>}
          right={<KeyWord content="one surveyed person" minLength={20} align="right" />}
        />
        <Split
          left={<>In a survey of characteristics of newts, what is an individual?</>}
          right={<KeyWord content="one newt" minLength={20} align="right" />}
        />
      </Section>

      <Section>
        <h2>Misleading Graphs</h2>
        <p>
          A graph is <KeyWord content="misleading" /> when its design makes a
          comparison look different from the data. Check the scale, labels,
          intervals, and whether the display starts at zero.
        </p>
        <p>View the following chart reflecting the percent of three countries serviced by trains.</p>
        <img src={pictogram} alt="Example pictogram" style={Styles.Image} />
        <p>How many times more people are serviced by trains in China vs. the United States?</p>
        {reveal ? <p><b>Roughly 2 times as many people.</b></p> : (<><br/><br/></>)}
        <p>Roughly how many times bigger is the area of the Chinese bar vs the United States bar?</p>
        {reveal ? <p><b>Roughly 4 times bigger.</b></p> : (<><br/><br/></>)}
        <p>Why might the above pictogram be misleading?</p>
        {reveal ? <p><b>The pictogram's bars are not proportional to their percentage. This would make a glance look make you think that China is excessively larger than it truly is.</b></p> : (<><br/><br/></>)}
      </Section>
      <Section>
        <h2>Pictograms</h2>
        <p>
          A <KeyWord content="pictogram" /> uses repeated pictures or symbols
          to represent counts. Always read its key before comparing symbols.
        </p>
        <div style={Styles.ExampleBox} aria-label="Pictogram showing train use by country">
          <p><strong>Key:</strong> 🚂 represents 1 million people</p>
          <table>
            <thead>
              <tr><th>Country</th><th>People riding a train each day</th></tr>
            </thead>
            <tbody>
              <tr><td>Japan</td><td>🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂</td></tr>
              <tr><td>France</td><td>🚂 🚂 🚂 🚂 🚂 🚂</td></tr>
              <tr><td>Canada</td><td>🚂 🚂 🚂 🚂</td></tr>
            </tbody>
          </table>
        </div>
        <p style={Styles.ExampleBox}>
          Beware! Pictograms can be misleading if the symbols are not proportional to the data they represent.
        </p>
      </Section>

      <Section>
        <h2>Groupings and Clustered Bar Charts</h2>
        <p>
          A <KeyWord content="grouping" /> divides data into a second
          categorical variable, such as grade level or class period. A{' '}
          <KeyWord content="clustered bar chart" /> places bars for each
          category next to one another within each group.
        </p>

        <table>
          <thead>
            <tr>
              <th>Favorite activity</th>
              <th>Grade 9</th>
              <th>Grade 10</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sports</td><td>8</td><td>6</td></tr>
            <tr><td>Music</td><td>5</td><td>7</td></tr>
            <tr><td>Games</td><td>3</td><td>4</td></tr>
          </tbody>
        </table>

        <div className="lesson-chart" style={Styles.VerticalChart} aria-label="Vertical clustered bar chart comparing activities for Grade 9 and Grade 10">
          <div style={Styles.Legend}>
            <span><span className="lesson-chart-color" style={Styles.LegendSwatch} /> Sports</span>
            <span><span className="lesson-chart-color" style={{ ...Styles.LegendSwatch, backgroundColor: 'var(--accent-color)' }} /> Music</span>
            <span><span className="lesson-chart-color" style={{ ...Styles.LegendSwatch, backgroundColor: 'var(--text-muted)' }} /> Games</span>
          </div>
          <div style={Styles.ChartGroups}>
            <ClusteredBar label="Grade 9" values={['8', '5', '3']} />
            <ClusteredBar label="Grade 10" values={['6', '7', '4']} />
          </div>
        </div>
        <p>
          Grade 9 and Grade 10 are the x-axis groups. The colored bars within
          each group show Sports, Music, and Games.
        </p>
        <ol>
          <li>
            <Split leftWeight={2} left={<>Which group chose Sports more often?</>} right={<KeyWord content="Grade 9" minLength={12} align="right" />} />
          </li>
          <li>
            <Split leftWeight={2} left={<>How many Grade 10 students chose Music?</>} right={<KeyWord content="7" minLength={12} align="right" />} />
          </li>
        </ol>
      </Section>

      <Section>
        <h2>Degrees in a Pie Chart</h2>
        <p>
          A <KeyWord content="sector" /> is one region of a pie chart. Its{' '}
          <KeyWord content="central angle" /> measures the part of the whole
          represented by that category.
        </p>
        <p style={Styles.ExampleBox}>
          <KeyWord content="sector angle" /> = relative frequency x 360 degrees
        </p>
        <ol>
          <li>
            A category that is 25% of the data has an angle of{' '}
            <KeyWord content="90 degrees" minLength={12} />.
          </li>
          <li>
            A category with 12 out of 30 entries has an angle of{' '}
            <KeyWord content="144 degrees" minLength={12} />.
          </li>
          <li>
            A 72-degree sector represents{' '}
            <KeyWord content="20%" minLength={12} /> of the data.
          </li>
        </ol>
      </Section>
    </div>
  );
}

function ClusteredBar({ label, values }: { label: string; values: string[] }) {
  return (
    <div style={Styles.ChartGroup}>
      <div style={Styles.ChartBars}>
        {values.map((value, index) => (
          <span
            className="lesson-bar"
            key={`${label}-${index}`}
            style={{
              ...Styles.VerticalBar,
              height: `${Number(value) * 12}px`,
              backgroundColor: index === 0
                ? 'var(--primary-color)'
                : index === 1
                  ? 'var(--accent-color)'
                  : 'var(--text-muted)',
            }}
          >
            {value}
          </span>
        ))}
      </div>
      <span style={Styles.GroupLabel}>{label}</span>
    </div>
  );
}

const Styles = {
  Lesson: {
    font: '16px Comic Sans MS, Cursive, sans-serif',
  } satisfies React.CSSProperties,

  Image: {
    display: 'block',
    width: '100%',
    maxWidth: '650px',
    height: 'auto',
    margin: '1rem auto',
    objectFit: 'contain',
  } satisfies React.CSSProperties,

  ExampleBox: {
    border: '1px solid var(--border-color)',
    borderLeft: '4px solid var(--primary-color)',
    padding: '1rem',
    margin: '1rem 0',
    backgroundColor: 'var(--code-bg)',
  } satisfies React.CSSProperties,

  Chart: {
    maxWidth: '650px',
    minHeight: '180px',
    margin: '1rem auto',
    padding: '1rem',
    borderLeft: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  } satisfies React.CSSProperties,

  ChartGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: '130px',
  } satisfies React.CSSProperties,

  ChartBars: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.35rem',
  } satisfies React.CSSProperties,

  VerticalBar: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '2.2rem',
    minHeight: '1.5rem',
    paddingTop: '0.25rem',
    color: 'white',
    fontWeight: 700,
  } satisfies React.CSSProperties,

  GroupLabel: {
    paddingTop: '0.5rem',
    fontWeight: 700,
  } satisfies React.CSSProperties,

  Legend: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  } satisfies React.CSSProperties,

  LegendSwatch: {
    display: 'inline-block',
    width: '0.8rem',
    height: '0.8rem',
    marginRight: '0.25rem',
    backgroundColor: 'var(--primary-color)',
  } satisfies React.CSSProperties,

  VerticalChart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '650px',
    margin: '1rem auto',
    borderLeft: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  } satisfies React.CSSProperties,

  ChartGroups: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '3rem',
  } satisfies React.CSSProperties,

  BarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '0.75rem 0',
  } satisfies React.CSSProperties,

  BarLabel: {
    flex: '0 0 90px',
    textAlign: 'right',
  } satisfies React.CSSProperties,

  Bar: {
    display: 'block',
    minWidth: '2rem',
    padding: '0.35rem 0.5rem',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    textAlign: 'right',
  } satisfies React.CSSProperties,
};