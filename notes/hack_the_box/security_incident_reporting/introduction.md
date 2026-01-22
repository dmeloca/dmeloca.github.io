## Incident Identification and Categorization

> Essentially, the cornerstone of an initial successful response to an incident lies in the capability to promptly identify and categorize the threat.

### Identify Security Incidents
Incidents emanate from a diverse array of sources (detections, anomalies or deviations)
#### Key sources for incident identification
| source                            | Description                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| Security Systems/Tooling in place | Using security systems (IDS/IPS, EDR/XDR, SIEM, basic anti-virus alerts and NetFlow data) |
| Human Observations                | Reports of suspicious activities, unusual email or system behaving abnormally             |
| Third Party Notifications         | Third party information about any vulnerability or breaches.                              |

#### Categorizing Security Incidents
Facilitate prioritization and allocation of resources for an effective response.
- `Malware`: Malicious software encompassing viruses, worms, and ransomware.
- `Phishing`: Fraudulent endeavors to exfiltrate sensitive information, predominantly via email.
- `DDoS Attacks`: Deliberate attempts to inundate a system or network, thereby disrupting its regular functionality.
- `Unauthorised Access`: Incidents where unauthorized entities gain access to systems or data repositories.
- `Data Leakage`: Inadvertent exposure of confidential data, both within and outside the organizational perimeter.
- `Physical Breach`: Unauthorized physical access to secure locations.
#### Incident Severity 
- `Critical` (P1): Imminent threats that jeopardize core business functionalities or sensitive data, necessitating immediate intervention.
- `High` (P2): Latent threats to business operations that, while not immediately detrimental, are of elevated priority.
- `Medium` (P3): Incidents that, although not posing an immediate threat to business operations, warrant timely attention.
- `Low` (P4): Trivial incidents or routine anomalies that can be managed within standard operational workflows.
> It's crucial to recognize that incidents frequently straddle multiple categories and can dynamically shift in both category and severity as additional intelligence is garnered during the analysis phase. The fluid nature of these threats mandates a flexible yet structured approach to both identification and categorization.