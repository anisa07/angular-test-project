const createDate = (days: number) => new Date(Date.now() - (3600000 * 24 * days));

export const coursesList = [
  {
    id: '1',
    duration: 60,
    creationDate: createDate(-5),
    description: 'This course aims to teach everyone the basics of programming computers using Python. ' +
      'We cover the basics of how one constructs a program from a series of simple instructions in Python.  ' +
      'The course has no pre-requisites and avoids all but the simplest mathematics. ' +
      'Anyone with moderate computer experience should be able to master the materials in this course. ' +
      'This course will cover Chapters 1-5 of the textbook “Python for Everybody”.  ' +
      'Once a student completes this course, they will be ready to take more advanced programming courses. ' +
      'This course covers Python 3.',
    title: 'Python for Everybody',
  },
  {
    id: '2',
    duration: 45,
    creationDate: createDate(12),
    description: 'On this course, you will hear directly from our world-class experts about the theory behind the analyses ' +
      'of COVID-19 and its spread, while learning how to interpret new information using core principles ' +
      'of public health, epidemiology, medicine, health economics, and social science. ' +
      'You will be able to watch regular situation reports about the state of the epidemic, provided by the researchers ' +
      'of J-IDEA and its director Professor Neil Ferguson. \n',
    title: 'Science Matters: Let\'s Talk About COVID-19',
  },
  {
    id: '3',
    duration: 110,
    creationDate: createDate(30),
    description: 'This Specialization will teach you to optimize website content for the best possible search engine ranking. ' +
      'You\'ll learn the theory behind Google search and other search engine algorithms; ' +
      'you\'ll also build practical, real-world skills that you can apply to a career in digital marketing ' +
      'or online content development, ' +
      'including on-page and off-page optimization, optimizing for local and international audiences, ' +
      'conducting search-focused website audits, and aligning SEO with overall business strategies. ' +
      'Each course is intended to build on the skills from the previous course, ' +
      'thus we recommend you take the courses in the order they are listed. The Specialization culminates ' +
      'in a hands-on Capstone Project, ' +
      'in which you will apply your skills to a comprehensive SEO consulting task.',
    title: 'Search Engine Optimization (SEO) Specialization',
  }
];
