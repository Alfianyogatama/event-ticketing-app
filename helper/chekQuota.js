exports.checkQuota = (quota, fullfiledQuota, ticket) => {
  const availableQuota = quota - fullfiledQuota
  if (availableQuota + ticket > quota) return false
  else return true
}
