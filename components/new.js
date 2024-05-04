// pages/error.js

import Link from 'next/link';

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      {statusCode === 404 && <p>This page does not exist. Please check the URL.</p>}
      <p>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
