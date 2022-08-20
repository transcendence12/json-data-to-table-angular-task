
export interface DataModel {
    exec_time: number
    response: Response
    }
    
    export interface Response {
    current_page: number
    from: number
    last_page: number
    per_page: number
    to: number
    total: number
    data: DataOrder[]
    }
    
    export interface DataOrder {
    work_order_id: number
    description: string
    received_date: string
    assigned_to?: AssignedTo[] | any
    status: string
    priority: string
    }
    
    export interface AssignedTo {
    person_name?: string | undefined
    status?: string
    }
    
