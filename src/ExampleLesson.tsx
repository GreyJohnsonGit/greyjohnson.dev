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
          <h2>Important Note</h2>
          <p>
            A number (ex. 123, 45-2134, 007) is not automatically quantitative. For example, a student
            identification number (ex. 20023) may contain digits, but it is only a label.
            If you were to average three student numbers, 20023, 20025, and 20028, the result would be 20025.33... which would not have any meaningful interpretation.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Practice: Identify the Variable Type</h2>

        <p>
          Decide whether each variable is categorical or quantitative.
        </p>

        <ol>
          <QuantVsQual 
            desc="The number of texts a student sends in one day (ex. 15):" 
            answer="quantitative" />
          <QuantVsQual 
            desc="A student's preferred school lunch (ex. pizza):" 
            answer="categorical" />
          <QuantVsQual 
            desc="The amount of money spent on lunch (ex. $7.50):" 
            answer="quantitative" />
          <QuantVsQual 
            desc="The time it takes to run one mile (ex. 8 minutes):" 
            answer="quantitative" />
          <QuantVsQual 
            desc="The brand of phone a student uses (ex. Apple):" 
            answer="categorical" />
          <QuantVsQual 
            desc="Whether a student has a part-time job (ex. yes):" 
            answer="categorical" />
          <QuantVsQual 
            desc="The time it takes to run one mile (ex. 8 minutes):" 
            answer="quantitative" />
          <QuantVsQual 
            desc="The brand of phone a student uses (ex. Android):" 
            answer="categorical" />
          <QuantVsQual 
            desc="Whether a student has a part-time job (ex. yes):" 
            answer="categorical" />
          <QuantVsQual 
            desc="A student's phone number (ex. 123-456-7890):" 
            answer="categorical" />
          <QuantVsQual 
            desc="A student's age (ex. 16):" 
            answer="quantitative" />
        </ol>
      </Section>
    </div>
  );
}

function QuantVsQual({ desc, answer }: { desc: string; answer: string }) {
  return (
    <li>
      <Split
        leftWeight={2}
        left={<> {desc} </>}
        right={<KeyWord minLength={12} align="right" content={answer} />}
      />
    </li>
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