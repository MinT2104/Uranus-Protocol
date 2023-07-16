interface IProfileProps {}

const Profile = (props: IProfileProps) => {
  const urlSplit = window?.location.href.split("/");
  console.log(urlSplit)
  return (
    <section>
      <h1>Hello</h1>
    </section>
  )
}

export default Profile
