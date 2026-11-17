import { Link, useParams } from 'react-router-dom'

// One post, written inline. Move to markdown files when there is a second one.
const posts: Record<string, { title: string; date: string; body: JSX.Element }> = {
  'dialoggpt-bugs': {
    title: 'What I am fixing in DialogGPT',
    date: 'November 2026',
    body: (
      <>
        <p>
          DialogGPT is a decoder transformer I wrote from scratch in PyTorch to generate movie-style dialogue. It trains and
          it serves, and it is wrong in instructive ways. The current list, in the order I plan to fix them:
        </p>
        <ol>
          <li>
            <strong>Loss diverges across epochs.</strong> Training loss drops, then climbs. Most likely a learning-rate
            schedule problem; warm-up and gradient clipping are the first things to check.
          </li>
          <li>
            <strong>Padding and UNK share an id.</strong> The tokenizer maps both to the same index, so the model learns to
            predict padding as if it were an unknown word.
          </li>
          <li>
            <strong>Vocabulary bloat.</strong> The vocabulary is far larger than the corpus justifies. Frequency
            thresholding or a BPE tokenizer should cut it down.
          </li>
          <li>
            <strong>Generation collapse.</strong> After a few tokens the model repeats itself. Temperature and top-k
            sampling help; fixing the items above should help more.
          </li>
          <li>
            <strong>No train/validation split.</strong> Every number so far is on the training set, so every number so far
            is optimistic.
          </li>
        </ol>
        <p>
          Code is at{' '}
          <a className="link" href="https://github.com/CodingBlood/DialogGPT" target="_blank" rel="noreferrer">
            github.com/CodingBlood/DialogGPT
          </a>
          .
        </p>
      </>
    ),
  },
}

export default function Blog() {
  const { slug } = useParams()
  const post = slug ? posts[slug] : undefined

  if (!post) {
    return (
      <main className="post post__list" id="main">
        <h1>Notes</h1>
        <ul style={{ marginTop: '2rem' }}>
          {Object.entries(posts).map(([s, p]) => (
            <li className="entry" key={s}>
              <Link to={`/blog/${s}`} className="link">
                {p.title}
              </Link>
              <span className="muted">{p.date}</span>
            </li>
          ))}
        </ul>
      </main>
    )
  }

  return (
    <main className="post" id="main">
      <p className="muted">
        <Link to="/blog" className="link">
          Notes
        </Link>
        , {post.date}
      </p>
      <h1 style={{ marginTop: '0.75rem' }}>{post.title}</h1>
      <div style={{ marginTop: '1.5rem' }}>{post.body}</div>
    </main>
  )
}
