export default interface IserviceLeaderboard {
  getLeaderboard(): Promise<object[] | undefined>;
}
