// This will allow for the links to work in both development and production modes
export default function LinkPushing(rooter, routeD, routeP) {
  //! rooter = gets the instance of useRouter on link component since a Hook cannot be used in a function

  const env = process.env.NODE_ENV;

  if (env == "development") {
    rooter.push(routeD);
  }

  if (env == "production") {
    rooter.push("/next-projects/" + routeP);
  }
}
