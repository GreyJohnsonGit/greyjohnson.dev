import { KeyWord, Section, Split } from "../LessonComponent";
import { Latex } from "../Latex";
import realNumbersImage from '../assets/alg_l001_realnums.webp';

/**
 * Layout:
 * Notes: Sets, Element of a Set, set notation ("{a, b, c, ...}""), Subsets
 * Questions:
 * - Is this a set? (key idea, no duplicates)
 * - Is this a subset?
 * - Represent this diagram using set notation
 * Notes: Real Numbers, Natural, Whole, Integer, Rational, Irrational
 * Questions: 
 * - Is this number natural, whole, integer, rational, or irrational?
 * Notes: Whether products and sums of rational and irrational numbers are rational or irrational
 * Questions:
 * - Is the sum of two rational numbers rational?
 * - Is the product of two rational numbers rational?
 * - Is the sum of a rational and an irrational number rational or irrational?
 * - Is the product of a rational and an irrational number rational or irrational?
 */
export function Alg_L001_RealNums() {
  return (
    <div style={Styles.Lesson}>
      <h1>1-1 Operations on Real Numbers</h1>
      <p style={Styles.Outcome}>I CAN… reason about operations on real numbers.</p>


      <Section>
        <h2>Vocabulary</h2>
        <ul>
          <li><KeyWord content="element of a set" /> is an object that belongs to a set.</li>
          <li><KeyWord content="set" /> is a collection of objects or numbers.</li>
          <li><KeyWord content="subset" /> is a set made up of elements from another set.</li>
        </ul>
      </Section>

      <Section>
        <h2>Essential Question</h2>
        <p>
          What are real numbers, and how can you describe the results of operations on real numbers?
        </p>
      </Section>

      <Section>
        <h2>Understand Sets and Subsets</h2>
        <p>
          A <KeyWord content="set" /> is a collection of objects such as numbers. An{' '}
          <KeyWord content="element" /> of a set is an object that is in the set.
        </p>

        <p>
          Write a set by listing the elements inside curly braces. For example, the set of integers from 1 to 10 can be written as:
        </p>

        <p style={Styles.Example}>
          <Latex keyword content={'A = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}'} />
        </p>

        <p>
          In that set, the subset of even numbers is <KeyWord content="{2, 4, 6, 8, 10}" />, and the subset of multiples of 5 is <KeyWord content="{5, 10}" />.
        </p>

        <p>
          The <KeyWord content="intersection" /> of these two subsets is the set of numbers in both groups, which is <KeyWord content="{10}" />.
        </p>

        <h3>Check Your Thinking</h3>
        <ol>
          <li>
            <Split
              leftWeight={3}
              rightWeight={1}
              left={<>Which numbers in set A are elements of both the subset of odd numbers and the subset of multiples of 3?</>}
              right={<KeyWord content="{3, 9}" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={3}
              rightWeight={1}
              left={<>Is {'{'}red, blue{'}'} a subset of {'{'}red, blue, green{'}'}?</>}
              right={<KeyWord content="Yes" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={3}
              rightWeight={1}
              left={<>Is {'{'}2, 6{'}'} a subset of {'{'}1, 2, 3, 4, 5{'}'}?</>}
              right={<KeyWord content="No" minLength={12} align="right" />}
            />
          </li>
        </ol>
      </Section>

      <Section>
        <h2>Real Numbers</h2>
        <img src={realNumbersImage} alt="Operations on Real Numbers" style={Styles.Image} />
        <p>
          Real numbers are all the numbers that can be represented on a <KeyWord content="number line" />.
          They include counting numbers, fractions, decimals, and numbers such as <Latex keyword content={'\\sqrt{2}'} /> or <Latex keyword content={'\\pi'} /> that cannot be written as fractions.
        </p>

        <ul>
          <li>
            <KeyWord content="Natural numbers" /> are the counting numbers: 1, 2, 3, 4, and so on.
          </li>
          <li>
            <KeyWord content="Whole numbers" /> are the natural numbers and zero: 0, 1, 2, 3, and so on.
          </li>
          <li>
            <KeyWord content="Integers" /> are the whole numbers and their opposites: ..., -3, -2, -1, 0, 1, 2, 3, ...
          </li>
          <li>
            <KeyWord content="Rational numbers" /> can be written as a ratio of two integers, with a nonzero denominator.
          </li>
          <li>
            <KeyWord content="Irrational numbers" /> cannot be written as a ratio of integers.
          </li>
        </ul>

        <p style={Styles.Example}>
          Natural numbers are inside the whole numbers, which are inside the integers, which are inside the rational numbers. All rational and irrational numbers are real numbers.
        </p>
      </Section>

      <Section>
        <h2>Classify Each Number</h2>
        <p>
          A number can belong to more than one set. For example, 4 is natural, whole, integer, rational, and real.
        </p>

        <ol>
          <li>
            -7 is an <KeyWord content="integer and a rational number" minLength={28} />.
          </li>
          <li>
            0 is a <KeyWord content="whole number, integer, and rational number" minLength={42} />.
          </li>
          <li>
            <Latex content={'-~\\frac{3}{5}'} /> is a <KeyWord content="rational number" minLength={18} />.
          </li>
          <li>
            The square root of 2, <Latex content={'\\sqrt{2}'} />, is an <KeyWord content="irrational number" minLength={18} />.
          </li>
        </ol>
      </Section>

      <Section>
        <h2>Rational and Irrational Operations</h2>
        <p>
          Adding or multiplying real numbers can produce different kinds of results. Use the rules below as a guide, but sometimes the result depends on the exact numbers involved.
        </p>

        <table style={Styles.Table}>
          <thead>
            <tr>
              <th>Left Number</th>
              <th>Operation</th>
              <th>Right Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>rational</td>
              <td>+</td>
              <td>rational</td>
              <td><KeyWord content="rational" minLength={12} /></td>
            </tr>
            <tr>
              <td>rational</td>
              <td>×</td>
              <td>rational</td>
              <td><KeyWord content="rational" minLength={12} /></td>
            </tr>
            <tr>
              <td>rational</td>
              <td>+</td>
              <td>irrational</td>
              <td><KeyWord content="irrational" minLength={12} /></td>
            </tr>
            <tr>
              <td>rational</td>
              <td>×</td>
              <td>irrational</td>
              <td><KeyWord content="irrational" minLength={12} /></td>
            </tr>
            <tr>
              <td>irrational</td>
              <td>+</td>
              <td>irrational</td>
              <td><KeyWord content="rational or irrational" minLength={22} /></td>
            </tr>
            <tr>
              <td>irrational</td>
              <td>×</td>
              <td>0</td>
              <td><KeyWord content="rational" minLength={12} /></td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section>
        <h2>Practice</h2>
        <p>Classify each number</p>

        <ol>
          <li>
            <Split
              leftWeight={4}
              rightWeight={1}
              left={<>Is 12 natural, whole, integer, rational, or irrational?</>}
              right={<KeyWord content="all but irrational" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={4}
              rightWeight={1}
              left={<>Is -2.5 rational or irrational?</>}
              right={<KeyWord content="rational" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={4}
              rightWeight={1}
              left={<>Is the square root of 9, <Latex content={"\\sqrt{9}"} />, rational or irrational?</>}
              right={<KeyWord content="rational" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={4}
              rightWeight={1}
              left={<>Is the sum of 2/3 and 5/6 rational or irrational?</>}
              right={<KeyWord content="rational" minLength={12} align="right" />}
            />
          </li>
          <li>
            <Split
              leftWeight={4}
              rightWeight={1}
              left={<>Is the product of 4 and the square root of 3 rational or irrational?</>}
              right={<KeyWord content="irrational" minLength={12} align="right" />}
            />
          </li>
        </ol>
      </Section>
    </div>
  );
}

const Styles = {
  Lesson: {
    font: '16px Comic Sans MS, Cursive, sans-serif',
  },

  Image: {
    display: 'block',
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
    margin: '1rem auto',
  },

  Column: {
    flex: 1,
    minWidth: 0,
  },

  Example: {
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--code-bg)',
    borderLeft: '4px solid var(--primary-color)',
  },

  Table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '1rem 0',
    fontSize: '0.95rem',
  } as React.CSSProperties,

  Outcome: {
    fontWeight: 700,
    color: 'var(--primary-color)',
    marginBottom: '1rem',
  },
} satisfies Record<string, React.CSSProperties>;