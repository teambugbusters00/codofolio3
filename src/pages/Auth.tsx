    const handleOAuth = async (provider: string) => {
      try {
        setIsLoading(true);
        await account.createOAuth2Session(
          provider as any,
          `${window.location.origin}/profile`,
          `${window.location.origin}/auth`
        );
      } catch (error) {
        console.error(`${provider} login failed:`, error);
        setIsLoading(false);
      }
    };
