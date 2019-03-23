export const availableTableFilters: Array<string> = []

export const __LoadThisOnErrorImage__ = `data:image/jpeg;base64,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kKjv0YinuuoRlyuXH2XbYuvJatsna8nwfqUPfdti68lq2ydryfB+pQ9922LryWrbJ2vJ+2FxECQvoHVDqh1Q6odUOqEayRTASmYiRatsna8lw2/iFatsna8l22IHcSqONftEsQUkti0HUJitvBjMRFobHDGdBmIs7Rnk81EoK2k2BxbCGdLivEHWehZNtHoK1bZO15LhsNivDpDAREJRuUDEhNqpkID2NGhsETqMjEq1CRKbaROpxUd2pVrE/QVq2ybwEoSkhcUVQ74d8O+HfDvh3w74d8I38g0wxsTaWa/EH//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888wwk08888888888oMMYE088888888888wgI8888888888888eA88888888888wwwg8888888888Qww088888888884Awgg088888888888888888888888888888888888888888888888888/8QAFhEBAQEAAAAAAAAAAAAAAAAAYBEx/9oACAEDAQE/ECewiH//xAAWEQEBAQAAAAAAAAAAAAAAAAARYCH/2gAIAQIBAT8Qk9YaH//EACcQAQABAwIGAgMBAQAAAAAAAAERACHwMVFAQWFxocEgkXCBsRDh/9oACAEBAAE/EPwIiNwt6Tvt8SlKW0T0X6G2/EEnLYv4Vj3cgKzoFoeRRhH8rCPVYR6rCPVFxR26GjjQ/n2VzDkrW+LNI4YsQIG45sft6rkXruyOlPIlkAQbPLT4vPPPLc0BywEEvNrsLiT/AEP52krlqqyt+w6er8Iv4msSCoT+ppjCl8uiGLF9KGzPFCQ9GiMLdbefiS9wqTShCEogA56UHMLTAbza5r2+6awUUIFQvB4nRWE3p4hSRR0qORbV+DSoiImwS0AwAkM7E20dLVgt1aud6ZvZweJ0VhN6eIVFj6+JFzvHWj8bJwDdaOLKF/2MUGz0EgXvpQySAdxKVCkuCf8AnSsFurVzvTN7ODxOisJvTxD/ABSgnQE8FFo+BwB2KOHcIT+zZ60E9EWMJkOxpV4BLoXRNhC1gt1aud6ZvZweJ0VhN6eIfPBbq1c70zezg8TorCb08Q+eC3Vq53pm9nB4nRTCxAG4kY6xQA0yMisG9Vg3qsG9Vg3qsG9Vg3quaNSIkSdKhBmnmFljzWb2cHidFZ7ZVqtVqtVqtVqtWU2rN7ODxOisptpjBz9Sr+wSdmk4cyki0JK6870qsr9ML1iGh0WLJnLXNMQUV0RAEZghYbOVH7GBGUCbje0NGxoglwVgW7dbzRBmCwamWI15RWU2rN7ODxOis9tpLBZQwdw0rRM6S7F0owaQCROpR8WiwS2lq+oZLNYnatEzpLuTWmfVJAV13rTX2x3ErKbVm9nBrgOuiZG/1S2ZxZECL3rFPdYp7rFPdYp7rFPdYp7rFPdYp7oNHEwAkSVpYC4UAY/EH//Z`

const { pow, floor, abs, log } = Math

function round(n: number, precision: number) {
  var prec = Math.pow(10, precision)
  return Math.round(n * prec) / prec
}

export function suffixNum(number: number) {
  const n = number || 0
  var base = floor(log(abs(n)) / log(1000))
  var suffix = "kmb"[base - 1]
  return suffix ? round(n / pow(1000, base), 2) + suffix : "" + n
}

export const adminPerms = []
