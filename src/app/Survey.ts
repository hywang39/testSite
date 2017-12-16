export class Survey{

	public get $income(): number {
		return this.income;
	}

	public set $income(value: number) {
		this.income = value;
	}

	public get $age(): number {
		return this.age;
	}

	public set $age(value: number) {
		this.age = value;
	}

	public get $purpose(): string {
		return this.purpose;
	}

	public set $purpose(value: string) {
		this.purpose = value;
	}

	public get $source(): string {
		return this.source;
	}

	public set $source(value: string) {
		this.source = value;
	}

	public get $ror(): number {
		return this.ror;
	}

	public set $ror(value: number) {
		this.ror = value;
	}

	public get $risk_aversion(): boolean {
		return this.risk_aversion;
	}

	public set $risk_aversion(value: boolean) {
		this.risk_aversion = value;
	}

	public get $mobile(): boolean {
		return this.mobile;
	}

	public set $mobile(value: boolean) {
		this.mobile = value;
	}

	constructor() {
    }
    
    public income: number;
    public age: number;
    public purpose: string;
    public source: string;
    public ror: number;
    public risk_aversion: boolean;
    public mobile: boolean;
}