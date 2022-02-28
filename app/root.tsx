import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Link,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
    <Layout>
      <Outlet />
    </Layout>
  </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
        <title>{title ? title : 'Remix Blog'}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

function Layout({ children }) {

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>

        <ul className='nav'>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
            <li>
              <form action='/auth/logout' method='POST'>
                <button type='submit' className='btn'>
                  Logout 
                </button>
              </form>
            </li>
            <li>
              <Link to='/auth/login'>Login</Link>
            </li>
          
        </ul>
      </nav>

      <div className='container'>{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}