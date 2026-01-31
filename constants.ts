import { MentalDisorder, Resource, BlogPost, Testimonial, Counselor, ForumTopic } from './types';

export const DISORDERS: MentalDisorder[] = [
  {
    id: 'anxiety',
    name: 'Anxiety Disorders',
    shortDescription: 'Persistent, excessive worry that interferes with daily activities.',
    fullDescription: 'Anxiety disorders involve more than temporary worry or fear. For a person with an anxiety disorder, the anxiety does not go away and can get worse over time. The symptoms can interfere with daily activities such as job performance, school work, and relationships.',
    symptoms: ['Feeling nervous, restless or tense', 'Sense of impending danger', 'Increased heart rate', 'Hyperventilation', 'Trouble concentrating'],
    treatment: ['Cognitive Behavioral Therapy (CBT)', 'Medication', 'Stress management techniques', 'Support groups']
  },
  {
    id: 'depression',
    name: 'Depression',
    shortDescription: 'A mood disorder causing a persistent feeling of sadness and loss of interest.',
    fullDescription: 'Depression is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed.',
    symptoms: ['Persistent sad, anxious, or "empty" mood', 'Feelings of hopelessness', 'Loss of interest in hobbies', 'Decreased energy or fatigue', 'Difficulty sleeping'],
    treatment: ['Psychotherapy', 'AntiDepressants', 'Brain stimulation therapies', 'Lifestyle changes (exercise, diet)']
  },
  {
    id: 'ptsd',
    name: 'PTSD',
    shortDescription: 'A disorder triggered by experiencing or witnessing a terrifying event.',
    fullDescription: 'Post-traumatic stress disorder (PTSD) is a mental health condition that\'s triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.',
    symptoms: ['Intrusive memories', 'Avoidance of reminders', 'Negative changes in thinking and mood', 'Changes in physical and emotional reactions'],
    treatment: ['Trauma-focused psychotherapies', 'Medication', 'Eye Movement Desensitization and Reprocessing (EMDR)']
  }
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    name: 'National Suicide Prevention Lifeline',
    phone: '988',
    website: 'https://988lifeline.org',
    description: 'The 988 Suicide & Crisis Lifeline provides 24/7, free and confidential support for people in distress.',
    isNational: true,
    category: 'Crisis'
  },
  {
    id: '2',
    name: 'NAMI HelpLine',
    phone: '1-800-950-NAMI',
    website: 'https://nami.org',
    description: 'A free, nationwide peer-support service providing information, resource referrals and support to people living with a mental health condition.',
    isNational: true,
    category: 'Information'
  },
  {
    id: '3',
    name: 'Crisis Text Line',
    phone: 'Text HOME to 741741',
    website: 'https://www.crisistextline.org',
    description: 'Free, 24/7 support for those in crisis. Text from anywhere in the USA to text with a trained Crisis Counselor.',
    isNational: true,
    category: 'Crisis'
  },
  {
    id: '4',
    name: 'Local Community Health Center',
    phone: '555-0123',
    website: '#',
    description: 'Your local hub for walk-in counseling and referrals to specialized care in the metro area.',
    isNational: false,
    category: 'Support'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding the Stigma: Why We Need to Talk',
    excerpt: 'Silence breeds stigma. Learn why open conversations about mental health are the first step toward healing.',
    content: 'Mental health stigma often comes from a lack of understanding or fear. Inaccurate or misleading media representations of mental illness contribute to both those factors. A review of studies on stigma shows that while the public may accept the medical or genetic nature of a mental health disorder and the need for treatment, many people still have a negative view of those with mental illness.',
    author: 'Dr. Sarah Jenkins',
    date: 'March 15, 2026',
    readTime: '5 min read',
    category: 'Awareness',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: '5 Daily Habits for Better Mental Resilience',
    excerpt: 'Small changes in your daily routine can build a stronger foundation for your mental well-being.',
    content: 'Resilience is not just about bouncing back; it is about building a buffer against future stressors. Start with these five habits: 1. Mindfulness meditation, 2. Regular physical activity, 3. Prioritizing sleep, 4. Social connection, and 5. Gratitude journaling.',
    author: 'Mark Thompson, LMHC',
    date: 'March 10, 2026',
    readTime: '3 min read',
    category: 'Self-Care',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Navigating Therapy: What to Expect',
    excerpt: 'Considering therapy for the first time? Here is a guide to demystify the process and what to expect in your first session.',
    content: 'The first session is often an intake session. The therapist will ask about your history, your current symptoms, and your goals for therapy. It is also a chance for you to see if you feel comfortable with the therapist.',
    author: 'Jessica Lee',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Treatment',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    age: 24,
    role: 'Student',
    quote: "I thought I was alone. Lumina helped me realize I wasn't.",
    story: "During my sophomore year, the pressure became unbearable. I isolated myself. Finding this community showed me that others were fighting the same battles. The counseling resources saved my academic career and, quite possibly, my life.",
    imageUrl: 'https://picsum.photos/200/200?random=4'
  },
  {
    id: '2',
    name: 'Priya Patel',
    age: 35,
    role: 'Software Engineer',
    quote: "It's okay to not be okay. Admitting that was my breakthrough.",
    story: "Anxiety had me paralyzed in my high-stress job. I used the scheduler here to find a therapist who specializes in anxiety. Two years later, I'm managing a team and mentoring others on work-life balance.",
    imageUrl: 'https://picsum.photos/200/200?random=5'
  }
];

export const COUNSELORS: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    specialty: 'Anxiety & Depression',
    availableTimes: ['Mon 9:00 AM', 'Mon 2:00 PM', 'Wed 10:00 AM'],
    imageUrl: 'https://picsum.photos/200/200?random=6'
  },
  {
    id: '2',
    name: 'James Wilson, LCSW',
    specialty: 'Trauma & PTSD',
    availableTimes: ['Tue 11:00 AM', 'Thu 1:00 PM', 'Fri 9:00 AM'],
    imageUrl: 'https://picsum.photos/200/200?random=7'
  },
  {
    id: '3',
    name: 'Sarah Johnson, LMFT',
    specialty: 'Family & Relationships',
    availableTimes: ['Wed 3:00 PM', 'Fri 10:00 AM'],
    imageUrl: 'https://picsum.photos/200/200?random=8'
  }
];

export const FORUM_TOPICS: ForumTopic[] = [
  {
    id: '1',
    title: 'Tips for handling panic attacks at work?',
    author: 'AnxiousBee',
    replies: 12,
    views: 345,
    lastActive: '2h ago',
    category: 'Anxiety'
  },
  {
    id: '2',
    title: 'Just celebrated 6 months of recovery!',
    author: 'HopefulHeart',
    replies: 45,
    views: 1200,
    lastActive: '10m ago',
    category: 'Success Stories'
  },
  {
    id: '3',
    title: 'Feeling isolated lately, anyone want to chat?',
    author: 'NewHere22',
    replies: 8,
    views: 150,
    lastActive: '5m ago',
    category: 'General'
  }
];
