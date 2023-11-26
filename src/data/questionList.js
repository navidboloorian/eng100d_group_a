
const questionList = [
    {
        text: 'I enjoy problem-solving tasks.',
        jobs: ['Software Engineering', 'Web Development', 'Embedded Systems', 'Machine Learning'],
        response: 2,
    },
    {
        text: 'I am interested in designing and implementing software that will be used by others.',
        jobs: ['Software Engineering', 'Web Development'],
        response: 2,
    },
    {
        text: 'I like working on large projects that take a long time to complete.',
        jobs: ['Software Engineering', 'Embedded Systems', 'Machine Learning'],
        response: 2,
    },
    {
        text: 'I am interested in learning different programming languages.',
        jobs: ['Software Engineering', 'Web Development'],
        response: 2,
    },
    {
        text: 'I enjoy working in a team.',
        jobs: ['Software Engineering'],
        response: 2,
    },
    {
        text: 'I am interested in the software development life cycle.',
        jobs: ['Software Engineering'],
        response: 2,
    },
    {
        text: 'I am interested in hardware and software integration.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I enjoy working with hardware components like microcontrollers and sensors.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I am interested in real-time systems.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I like working on projects that interact with the physical world.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I am interested in learning about different hardware platforms.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I am interested in system-level programming.',
        jobs: ['Embedded Systems'],
        response: 2,
    },
    {
        text: 'I am interested in designing and implementing websites or web applications.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I enjoy working with HTML, CSS, and JavaScript.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I am interested in frontend and backend development.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I like seeing the immediate visual results of my code.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I am interested in learning about different web frameworks.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I enjoy working on projects that are used by people around the world.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I am interested in UI and UX design.',
        jobs: ['Web Development'],
        response: 2,
    },
    {
        text: 'I am interested in artificial intelligence.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I enjoy working with data.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I am interested in predictive modeling.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I am intrigued by the idea of teaching a machine to learn from data.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I am interested in learning about machine-learning algorithms.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I enjoy working on projects that involve pattern recognition.',
        jobs: ['Machine Learning'],
        response: 2,
    },
    {
        text: 'I am interested in data analysis and interpretation.',
        jobs: ['Machine Learning'],
        response: 2,
    },
]

// randomize order of questions
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export default shuffleArray(questionList);