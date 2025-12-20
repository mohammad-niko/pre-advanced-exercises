export function LoginStatus({ error, loading }) {
  if (loading)
    return (
      <span role="status" aria-live="polite">
        Loading...
      </span>
    );
  if (error)
    return (
      <span role="alert" aria-live="assertive">
        Invalid credentials
      </span>
    );
  return <span role="status" aria-live="polite">Welcome</span>;
}


