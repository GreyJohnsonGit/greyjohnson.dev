import { KeyWord, Section, Split } from './LessonComponent';

export function ExampleLesson() {
  return (
    <div style={Styles.Lesson}>
      <h1>Statistics: Data and Variables</h1>

      <p>
        Statistics is the study of how we collect, organize, analyze, and
        interpret <KeyWord content="data" />.
      </p>

      <Section>
        <h2>What Is Data?</h2>
        <p>
          <KeyWord content="Data" /> are recorded observations, measurements,
          or responses collected for a purpose.
        </p>

        <p>Examples of data include:</p>
        <ul>
          <li>The heights of students in a class</li>
          <li>The favorite lunch choices of students</li>
          <li>The number of hours students slept last night</li>
          <li>Whether a student rides the bus to school</li>
        </ul>
      </Section>

      <Section>
        <h2>What Is a Variable?</h2>
        <p>
          A <KeyWord content="variable" /> is a characteristic that can have
          different values for different individuals or objects.
        </p>

        <p>
          For example, if we survey students, their height, favorite subject,
          number of siblings, and mode of transportation can all be variables.
        </p>
      </Section>

      <Section>
        <h2>Two Types of Variables</h2>

        <Split
          left={
            <div style={Styles.Column}>
              <h3>Categorical Variables</h3>
              <p>
                A <KeyWord content="categorical variable" /> places an
                individual into one of several groups or categories.
              </p>
              <p>
                Its values are labels or names, rather than meaningful numerical
                measurements.
              </p>

              <h4>Examples</h4>
              <ul>
                <li>Eye color: blue, brown, green</li>
                <li>Favorite music genre: rock, pop, country</li>
                <li>Class year: freshman, sophomore, junior, senior</li>
                <li>Transportation: car, bus, bicycle, walking</li>
              </ul>
            </div>
          }
          right={
            <div style={Styles.Column}>
              <h3>Quantitative Variables</h3>
              <p>
                A <KeyWord content="quantitative variable" /> has numerical
                values that represent counts or measurements.
              </p>
              <p>
                Arithmetic operations such as finding an average are meaningful
                for quantitative values.
              </p>

              <h4>Examples</h4>
              <ul>
                <li>Height: 68 inches</li>
                <li>Number of siblings: 2</li>
                <li>Hours of sleep: 7.5 hours</li>
                <li>Temperature: 72 degrees</li>
              </ul>
            </div>
          }
        />
      </Section>

      <Section>
        <h2>How Can You Tell the Difference?</h2>

        <p>Ask what the values represent:</p>

        <ol>
          <li>
            If the values are group names or labels, the variable is
            <strong> categorical</strong>.
          </li>
          <li>
            If the values are counts or measurements where arithmetic makes
            sense, the variable is <strong>quantitative</strong>.
          </li>
        </ol>

        <div style={Styles.ExampleBox}>
          <h3>Example: Student Survey</h3>
          <p>
            Suppose we ask students for their favorite school subject, number of
            hours they study each week, and class year.
          </p>

          <ul>
            <li>
              Favorite school subject is <strong>categorical</strong> because
              the responses are subject names.
            </li>
            <li>
              Hours studied per week is <strong>quantitative</strong> because
              the responses are numerical measurements.
            </li>
            <li>
              Class year is <strong>categorical</strong> because freshman,
              sophomore, junior, and senior are categories.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2>Practice: Identify the Variable Type</h2>

        <p>
          Decide whether each variable is categorical or quantitative.
        </p>

        <ol>
          <li>
            <Split
              leftWeight={2}
              left={<>The number of text messages a student sends in one day:</>}
              right={<KeyWord minLength={12} align="right" content="quantitative" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>A student's preferred school lunch:</>}
              right={<KeyWord minLength={12} align="right" content="categorical" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>The amount of money spent on lunch:</>}
              right={<KeyWord minLength={12} align="right" content="quantitative" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>The brand of phone a student uses:</>}
              right={<KeyWord minLength={12} align="right" content="categorical" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>The time it takes to run one mile:</>}
              right={<KeyWord minLength={12} align="right" content="quantitative" />}
            />
          </li>
          <li>
            <Split
              leftWeight={2}
              left={<>Whether a student has a part-time job:</>}
              right={<KeyWord minLength={12} align="right" content="categorical" />}
            />
          </li>
        </ol>
      </Section>

      <Section>
        <h2>Important Reminder</h2>
        <p>
          A number is not automatically quantitative. For example, a student
          identification number may contain digits, but it is only a label.
          Since arithmetic on identification numbers is not meaningful, it is a
          categorical variable.
        </p>
      </Section>
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
};