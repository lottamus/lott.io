import { tw } from 'twind';

export const Footer = () => {
  return (
    <footer className={tw`max-w-2xl mx-auto`}>
      <div className={tw`py-48 text-center`}>
        <h3 className={tw`mb-4 text-4xl font-bold tracking-wide`}>I love building products.</h3>
        <p className={tw`text-gray-500`}>
          Have an exciting idea?{' '}
          <a
            className={tw`border-b hover:(text-gray-700 dark:text-gray-300)`}
            href="mailto:hi@lott.io"
            data-splitbee-event="External Link"
            data-splitbee-event-type="email"
          >
            {`Let's build it!`}
          </a>
        </p>
      </div>
    </footer>
  );
};
