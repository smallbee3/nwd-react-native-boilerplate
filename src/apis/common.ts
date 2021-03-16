export const ROOT_URL = 'http://13.125.241.22:58080';

export const fetchPost = async (
  body: Record<string, unknown> | undefined,
  api: string | undefined,
  signal?: AbortSignal | undefined,
): Promise<Response> => {
  if (!body || !api) throw new Error('No request object');

  const fetchOption = {
    signal,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  try {
    const res: Response = await fetch(`${ROOT_URL}${api}`, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
