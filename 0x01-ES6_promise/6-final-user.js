import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  try {
    const user = await signUpUser(firstName, lastName);
    promises.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
    promises.push('Guardrail was processed');
  } catch (err) {
    promises.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
    promises.push('Guardrail was processed');

  } finally {
    return promises;
  }
}
