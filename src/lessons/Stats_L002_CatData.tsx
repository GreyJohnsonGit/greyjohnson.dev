import { Latex } from '../Latex';
import { useReveal } from '../AppContext';
import { KeyWord, Section, Split } from '../LessonComponent';

export function Stats_L002_CatData() {
  const { reveal } = useReveal();

  return (
    <div style={Styles.Lesson}>
      <h1>1.2 Categorical Data</h1>

      <p>
        <KeyWord content="Categorical data" /> describe groups or labels rather
        than numerical measurements. For example, a student's favorite
        activity, eye color, and method of transportation are categorical
        variables.
      </p>

      <Section>
        <h2>What Is Categorical Data?</h2>
        <p>
          A <KeyWord content="category" /> is a group or label used to sort
          data. A categorical variable records which category describes each
          individual.
        </p>

        <p>Examples of categorical variables include:</p>
        <ul>
          <li>Favorite school subject: mathematics, science, or English</li>
          <li>Transportation: bus, car, bicycle, or walking</li>
          <li>Pet ownership: dog, cat, another pet, or no pet</li>
          <li>Lunch choice: school lunch, packed lunch, or no lunch</li>
        </ul>

        <p style={Styles.ExampleBox}>
          Categorical data answer questions such as <em>which kind?</em> or
          <em> which group?</em> They do not usually describe an amount that
          should be added or averaged.
        </p>
      </Section>

      <Section>
        <h2>Frequency and Relative Frequency</h2>
        <p>
          The <KeyWord content="frequency" /> of a category is the number of
          observations in that category. The <KeyWord content="relative frequency" /> is 
          the fraction or percentage of all observations in that category.
        </p>

        <p style={Styles.ExampleBox}>
          <Latex content={'Relative~frequency = \\frac{frequency}{total~number~of~observations}'} />
        </p>

        <p>
          If 8 out of 20 students say they live in Sandwich, the frequency is 8 and the
          relative frequency is 8/20 = 0.40 = 40%.
        </p>

        <h3>Our Class Survey</h3>
        <p>
          20 students from one of my classes were asked about the town they live in. The raw responses were:
        </p>
        <p style={Styles.ExampleBox}>
          Sandwich, Sandwich, Sandwich, Sandwich, Forestdale,
          Sagamore, Sandwich, Sandwich, Sandwich, Sandwich,
          Sandwich, Forestdale, Bourne, Sandwich, Sandwich,
          Yarmouth Port, Sandwich, Forestdale, Sandwich, Sagamore
        </p>
      </Section>

      <Section>
        <h2>Activity: Build a Frequency Table</h2>
        <p>
          Count the responses in each category. Then use the total of 20 to
          calculate each relative frequency.
        </p>

        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Frequency</th>
              <th>Relative frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sandwich</td>
              <td><KeyWord content="13" minLength={2} /></td>
              <td><KeyWord content="65%" minLength={6} /></td>
            </tr>
            <tr>
              <td>Forestdale</td>
              <td><KeyWord content="3" minLength={2} /></td>
              <td><KeyWord content="15%" minLength={6} /></td>
            </tr>
            <tr>
              <td>Sagamore</td>
              <td><KeyWord content="2" minLength={2} /></td>
              <td><KeyWord content="10%" minLength={6} /></td>
            </tr>
            <tr>
              <td>Bourne</td>
              <td><KeyWord content="1" minLength={2} /></td>
              <td><KeyWord content="5%" minLength={6} /></td>
            </tr>
            <tr>
              <td>Yarmouth Port</td>
              <td><KeyWord content="1" minLength={2} /></td>
              <td><KeyWord content="5%" minLength={6} /></td>
            </tr>
            <tr>
              <th>Total</th>
              <th><KeyWord content="20" minLength={3} /></th>
              <th><KeyWord content="100%" minLength={6} /></th>
            </tr>
          </tbody>
        </table>

        <p>
          Check your table: the frequencies should add to 20, and the relative
          frequencies should add to 100%.
        </p>
      </Section>

      <Section>
        <h2>Bar Charts</h2>
        <p>
          A <KeyWord content="bar chart" /> displays the frequency of each
          category with separate bars. The categories are listed along one axis
          and the frequencies are shown on the other axis.
        </p>

        <div className="lesson-chart" style={Styles.Chart} aria-label="Bar chart of student hometowns">
          {reveal && <>
            <Bar label="Sandwich" width="100%" value="13" />
            <Bar label="Forestdale" width="23.1%" value="3" />
            <Bar label="Sagamore" width="15.4%" value="2" />
            <Bar label="Bourne" width="7.7%" value="1" />
            <Bar label="Yarmouth Port" width="7.7%" value="1" />
          </>}
        </div>

        <h3>Activity: Read the Bar Chart</h3>
        <ol>
          <li>
            <Split
              leftWeight={2}
              left={<>Which hometown is most common?</>}
              right={<KeyWord content="Sandwich" minLength={11} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>How many more students live in Sandwich than Forestdale?</>}
              right={<KeyWord content="10 students" minLength={11} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>What percentage of students live in Bourne or Yarmouth Port?</>}
              right={<KeyWord content="10%" minLength={11} align="right" />}
            />
          </li>
        </ol>
      </Section>

      <Section>
        <h2>Pie Charts</h2>
        <p>
          A <KeyWord content="pie chart" /> represents the whole data set as a
          circle. Each category is shown as a sector whose size matches its
          relative frequency.
        </p>

        <Split
          left={
            <div style={Styles.Column}>
              <div
                className="lesson-pie-chart"
                style={{
                  ...Styles.PieChart,
                  background: reveal ? Styles.PieChart.background : 'transparent',
                }}
                aria-label="Pie chart of student hometowns"
              />
            </div>
          }
          right={
            <div style={Styles.Column}>
              <ul>
                <li><strong>Sandwich:</strong> 65% of the circle</li>
                <li><strong>Forestdale:</strong> 15% of the circle</li>
                <li><strong>Sagamore:</strong> 10% of the circle</li>
                <li><strong>Bourne:</strong> 5% of the circle</li>
                <li><strong>Yarmouth Port:</strong> 5% of the circle</li>
              </ul>
              <p style={Styles.ExampleBox}>
                Sector angle = relative frequency x 360 degrees
              </p>
            </div>
          }
        />

        <p>
          What angle should represent Sandwich?{' '}
          <KeyWord content="234 degrees" minLength={12} />
          {' '}because 0.65 x 360 = 234.
        </p>
      </Section>

      <Section>
        <h2>Which Chart Should You Use?</h2>
        <Split
          left={
            <div style={Styles.Column}>
              <h3>Use a Bar Chart When...</h3>
              <ul>
                <li>You want to compare category frequencies.</li>
                <li>You want to show the exact count for each category.</li>
                <li>Some categories are close in size.</li>
              </ul>
            </div>
          }
          right={
            <div style={Styles.Column}>
              <h3>Use a Pie Chart When...</h3>
              <ul>
                <li>You want to emphasize parts of one whole.</li>
                <li>Relative frequencies are the main focus.</li>
                <li>There are only a few clear categories.</li>
              </ul>
            </div>
          }
        />

        <h3>Final Check</h3>
        <p>In what situation would you prefer to display the class's hometown distribution using a pie chart?</p>
        <br />
        <br />
        <br />
        <p>When would you prefer a bar chart?</p>
        <br />
        <br />
        <br />
      </Section>
    </div>
  );
}

function Bar({ label, width, value }: { label: string; width: string; value: string }) {
  return (
    <div style={Styles.BarRow}>
      <span style={Styles.BarLabel}>{label}</span>
      <span className="lesson-bar" style={{ ...Styles.Bar, width }}>{value}</span>
    </div>
  );
}

const Styles = {
  Lesson: {
    font: '16px Comic Sans MS, Cursive, sans-serif',
  } satisfies React.CSSProperties,

  Column: {
    flex: 1,
    minWidth: 0,
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
    minHeight: '250px',
    margin: '1rem auto',
    padding: '1rem',
    borderLeft: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  } satisfies React.CSSProperties,

  BarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    margin: '0.75rem 0',
  } satisfies React.CSSProperties,

  BarLabel: {
    flex: '0 0 100px',
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

  PieChart: {
    width: 'min(240px, 100%)',
    aspectRatio: '1',
    margin: '1rem auto',
    borderRadius: '50%',
    background: 'conic-gradient(var(--primary-color) 0 65%, var(--primary-light) 65% 80%, var(--accent-color) 80% 90%, var(--text-muted) 90% 95%, var(--primary-dark) 95% 100%)',
    border: '1px solid var(--border-color)',
  } satisfies React.CSSProperties,
};