import Header from "@/app/Header";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="scrollbar overflow-hidden relative h-screen">
      <div className="absolute"></div>
      <Header />
      {/* {isConnectedWallet && !userData?.isLogged ? <WalletConnection /> : null}
      {isConnectedWallet && userData?.isLogged ? <LoggedWallet /> : null}
      {isSelectToken ? <SelectToken /> : null} */}
      {children}
    </section>
  );
};
